import Player from '../player/player';
import { Socket } from 'socket.io';
import playerManager from '../player/player.manager';
import { io } from '../setup.server';

export const newPlayerHandler = (socket: Socket) => (name: string) => {
	const playerId = playerManager.assignNewPlayer(name, socket.id);
	console.log(`player ${name} with id ${playerId} created`);
	socket.emit('playerRegistered', playerId);
	io.emit('onlineCount', playerManager.getPlayersCount());
}

export const checkPlayerExists = (socket: Socket) => (playerId: string) => {
	const existed = playerManager.getPlayerById(playerId);
	io.emit('onlineCount', playerManager.getPlayersCount());
	if (!existed) {
		socket.emit('playerNotExists');
	} else {
		socket.emit('playerExists', existed);
	}
}