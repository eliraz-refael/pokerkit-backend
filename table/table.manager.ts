import Table from './table';
import Player from '../player/player';

class TableManager {
	
	private tables: Table[] = [];
	
	private createTable() {
		this.tables.push(new Table());
	}

	public getTables(): Table[] {
		return this.tables;
	}

	public getTable(tableId: string): Table | null {
		return this.findTableById(tableId);
	}

	public assignTable() {
		let tableId = this.checkForEmptyTable();
		if (!tableId) {
			const table = new Table;
			tableId = table.id;
			this.tables.push(table);
		}
		return tableId;
	}

	public joinTable(tableId: string, player: Player) {
		const table = this.findTableById(tableId);
		if (table) {
			table.assignPlayer(player);
		}
	}

	public removeAllTables(): void {
		this.tables = [];
	}

	public cleanUpEmptyTables(): void {
		let tableIndexsToClean: number[] = [];
		for (let i = 0; i < this.tables.length; i++) {
			if (this.tables[i].players.length === 0) {
				tableIndexsToClean.push(i);
			}
		}
		tableIndexsToClean.forEach(i => this.tables.splice(i, 1));
	}

	private findTableById(tableId: string): Table | null {
		for (let i = 0; i < this.tables.length; i++) {
			if (this.tables[i].id === tableId) {
				return this.tables[i];
			}
		}
		return null;
	}

	private checkForEmptyTable(): string | null {
		let tableId: string | null = null;
		this.tables.forEach(table => {
			if (table.players.length === 0) {
				tableId = table.id;
			}
		});
		return tableId;
	}
}

export default new TableManager;