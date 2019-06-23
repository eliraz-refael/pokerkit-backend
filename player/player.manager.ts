import Player from './player';
import { io } from '..';

class PlayerManager {

	public players: Player[] = [];

	public constructor() {
		setInterval(this.cleanOfflinePlayers.bind(this), 30000);
	}

	public assignNewPlayer(name: string, socketId: string): string {
		const player = new Player(name);
		player.setSocketId(socketId);
		this.players.push(player);
		return player.id;
	}

	public getPlayerById(playerId: string): Player | null {
		return this.findPlayerById(playerId);
	}

	public getPlayersCount(): number {
		return this.players.length;
	}

	private cleanOfflinePlayers() {
		console.log('cleanning offline players');
		let playersIndexToRemove = [];
		for (let i = 0; i < this.players.length; i++) {
			if (!io.sockets.sockets[this.players[i].socketId]) {
				playersIndexToRemove.push(i);
			}
		}
		playersIndexToRemove.forEach(i => this.players.splice(i, 1));
		io.emit('onlineCount', this.getPlayersCount());
	}

	private findPlayerById(playerId: string): Player | null {
		for (let i = 0; i < this.players.length; i++) {
			if (this.players[i].id === playerId) {
				return this.players[i];
			}
		}
		return null;
	}
}

export default new PlayerManager;