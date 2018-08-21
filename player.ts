import  uuidv4 from 'uuid/v4';
import Card from './card';

export default class Player {

	public name!: string;
	public id!: string;
	public hand!: Card[];

	public constructor(name: string) {
		this.name = name;
		this.id = uuidv4();
	}

	public takeCard(card: Card): void {
		this.hand.push(card);
	}

	public removeCards(): Card[] {
		return this.hand;
	}
}