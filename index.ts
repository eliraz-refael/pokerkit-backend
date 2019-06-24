import { Socket } from 'socket.io';
import { io, http } from './setup.server';
import { newPlayerHandler, checkPlayerExists } from './handlers/player.handler';
import playerManager from './player/player.manager';
// import Dealer from './dealer/dealer';
// import Table from './table/table';
// import { handleNewTable } from './handlers/table.handler';


playerManager.cleanOfflinePlayersByTime(30);
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