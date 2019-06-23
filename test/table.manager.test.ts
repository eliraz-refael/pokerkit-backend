import tableManager from '../table/table.manager';
import { expect } from 'chai';
import Player from '../player/player';

beforeEach(() => {
	tableManager.removeAllTables();
})

describe('Table Manager tests', () => {
	it('should create a table and have it on the table list if there are no empty table available', () => {
		tableManager.assignTable();
		expect(tableManager.getTables().length).to.be.above(0);
	});

	it('should assign an empty table when one available (only 1 table on the server)', () => {
		const tableId = tableManager.assignTable();
		const tableId2 = tableManager.assignTable();
		expect(tableId).to.equal(tableId2);
	});

	it('should assign empty table when one is available (one empy one is not)', () => {
		const tableId = tableManager.assignTable();
		tableManager.getTable(tableId)!.assignPlayer(new Player('john'));
		const tableId2 = tableManager.assignTable();
		const tableId3 = tableManager.assignTable();
		expect(tableId2).to.equal(tableId3);
		expect(tableId).to.not.equal(tableId2);
	});

	it('should cleanup empty tables from table list', () => {
		const tableId = tableManager.assignTable();
		tableManager.getTable(tableId)!.assignPlayer(new Player('john'));
		const tableId2 = tableManager.assignTable();
		const tableId3 = tableManager.assignTable();
		tableManager.cleanUpEmptyTables();
		expect(tableManager.getTables().length).to.equal(1);
	});
});