import { Socket } from 'socket.io';
import Dealer from './dealer/dealer';
import express from 'express';
import SocketIO from 'socket.io';
import { Server } from 'http';
import Table from './table/table';
import { handleNewTable } from './handlers/table.handler';
import { newPlayerHandler, checkPlayerExists } from './handlers/player.handler';
import playerManager from './player/player.manager';

const http = new Server(express);
export const io = SocketIO(http);

io.on('connection', (socket: Socket) => {
	socket.on('newPlayer', newPlayerHandler(socket));
	socket.on('checkPlayerId', checkPlayerExists(socket));
	// let table = new Table();
	
	// socket.emit('newTable', table.id);
	// socket.emit('deal', dealer.dealOneCard());
	// socket.on('newTable', handleNewTable(socket));
	// socket.on('joinTable', )
});



let port = process.env.PORT || 3000;

http.listen(port, () => {
	console.log(`Listening on port ${port}`);
});