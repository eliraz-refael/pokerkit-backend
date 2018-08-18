import Card, { Value, Suit } from './card';

export default class Deck {

	public cards: Card[];

	constructor() {
		this.cards = this.setup();
	}

	private setup(): Card[] {
		let values = Object.values(Value);
		let suit = Object.values(Suit);
		let cards: Card[] = [];
		suit.forEach(suit => {
			if (typeof suit === 'number') {
				values.forEach(value => {
					if (typeof value === 'number') {
						cards.push(new Card(value, suit));
					}
				});
			}
		});
		return cards;
	}

	public shuffle(): void {
		let array = this.cards;
		let remainingLength = this.cards.length;
		let element;
		let randomIndex;
		while (remainingLength) {
			randomIndex = Math.floor(Math.random() * remainingLength--);
			element = array[remainingLength];
			array[remainingLength] = array[randomIndex];
			array[randomIndex] = element;
		}
	}

	public dealOne(): Card | undefined {
		return this.cards.shift();
	}

	public addCard(card: Card): number {
		this.cards.push(card);
		return this.cards.length;
	}

	public print(): void {
		console.log('~~~~~~~~~ Deck: ');
		for (let i = 0; i < this.cards.length; i++) {
			this.cards[i].print();
		}
	}
}