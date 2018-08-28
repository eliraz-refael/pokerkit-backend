import  uuidv4 from 'uuid/v4';
import Card from './card';
import Dealer from './dealer';

export default class Player {

	public name!: string;
	public id!: string;
	public hand!: Card[];
	public isDealer!: boolean;

	public constructor(name: string, isDealer: boolean = false) {
		this.name = name;
		this.id = uuidv4();
		this.isDealer = isDealer;
	}

	public takeCard(card: Card): void {
		this.hand.push(card);
	}

	public removeCards(): Card[] {
		return this.hand;
	}

	public asDealer(): Dealer {
		return Dealer.getInstance();
	}
}