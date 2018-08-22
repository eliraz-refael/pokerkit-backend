import { Socket } from 'socket.io';
const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
import Dealer from './dealer';

let dealer = new Dealer();

io.on('connection', (socket: Socket) => {
	socket.emit('deal', dealer.dealOneCard());
	
});

http.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});