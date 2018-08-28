import { Socket } from 'socket.io';
import Dealer from './dealer';
import express from 'express';
import SocketIO from 'socket.io';
import { Server } from 'http';
import Table from './table';

const http = new Server(express);
const io = SocketIO(http);



io.on('connection', (socket: Socket) => {
	let table = new Table();
	socket.emit('newTable', table.id);
	// socket.emit('deal', dealer.dealOneCard());
});

let port = process.env.PORT || 3000;

http.listen(port, () => {
	console.log(`Listening on port ${port}`);
});