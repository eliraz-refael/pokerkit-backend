import Player from '../player/player';
import shortid from 'shortid';

export default class Table {

	public players: Player[] = [];
	public id: string = shortid.generate();
	public dealer: Player | undefined;
	public bigBlind: Player | undefined;
	public smallBlind: Player | undefined;

	public assignPlayer(player: Player) {
		this.players.push(player);
	}

	public setDealer(id: string): boolean {
		let success = false;
		for (let i = 0; i < this.players.length; i++) {
			const player = this.players[i];
			if (player.id === id) {
				this.dealer = player;
				success = true;
				this.setBigSmallBlind(i);
			}
		}
		return success;
	}

	public closeTable() {

	}

	public start() {

	}

	private setBigSmallBlind(dealerIndex: number) {
		if (this.players[dealerIndex + 2]) {
			this.smallBlind = this.players[dealerIndex + 1];
			this.bigBlind = this.players[dealerIndex + 2];
			return;
		}
		if (this.players[dealerIndex + 1]) { // dealer is 1 to the last
			this.smallBlind = this.players[dealerIndex + 1];
			this.bigBlind = this.players[0];
		} else { // dealer is the last one
			this.smallBlind = this.players[0];
			this.bigBlind = this.players[1];
		}
	}

}