import { Socket } from 'socket.io';
import express from 'express';
import SocketIO from 'socket.io';
import { Server } from 'http';
import Table from './table';

const app = express();
const http = new Server(app);
const io = SocketIO(http);

let table;
let onlineCount = 0;


function broadcastToAll(socket: Socket, message: string, data: any) {
	socket.broadcast.emit(message, data);
	socket.emit(message, data);
}


io.on('connection', (socket: Socket) => {
	onlineCount++;
	console.log('clients online: ', onlineCount);
	broadcastToAll(socket, 'onlineCount', onlineCount);

	socket.on('newTable', () => {
		table = new Table();
		socket.emit('newTable', table.id);
		socket.join(`table-${table.id}`);
	});

	socket.on('disconnect', () => {
		onlineCount--;
		broadcastToAll(socket, 'onlineCount', onlineCount);
	});

	socket.on('joinTable', (tableId) => {
		let room = `table-${tableId}`;
		if (io.sockets.adapter.rooms[room]) {
			socket.emit('joinedTable', tableId);
		}
	});
	
	socket.on('checkTable', (tableId) => {
		let room = `table-${tableId}`;
		if (io.sockets.adapter.rooms[room]) {
			socket.emit('tableExists', true);
		} else {
			socket.emit('tableExists', false);
		}
	});
});

let port = process.env.PORT || 3000;

http.listen(port, () => {
	console.log(`Listening on port ${port}`);
});