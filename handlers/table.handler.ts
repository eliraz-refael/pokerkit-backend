import Table from '../table/table';
import { Socket } from 'socket.io';
import tableManager from '../table/table.manager';

export const handleNewTable = (socket: Socket) => () => {
	let tableId = tableManager.assignTable();
	socket.emit('newTable', tableId);

}

export const handleJoinTable = (socket: Socket) => (tableId: string) => {
	tableManager
}