import Deck from '../card/deck';
import Card from '../card/card';

export default class Dealer {
	
	public deck: Deck;
	public burnedCards: Card[];
	public communityCards: Card[];
	private static instance: Dealer;

	private constructor() {
		this.deck = new Deck();
		this.deck.shuffle();
		this.burnedCards = [];
		this.communityCards = [];
	}

	public static getInstance() {
		if (!(Dealer.instance instanceof Dealer)) {
			Dealer.instance = new Dealer;
		}
		return Dealer.instance;
	}


	private dealCard(): void {
		let card = this.deck.dealOne();
		if (card) {
			this.communityCards.push(card);
		}
	}

	private burnCard(): void {
		let card = this.deck.dealOne();
		if (card) {
			this.burnedCards.push(card);
		}
	}

	public dealOneCard(): Card {
		return this.deck.dealOne()!;
	}

	public dealFlop(): void {
		this.burnCard();
		for (let i = 0; i < 3; i++) {
			this.dealCard();
		}
	}

	public dealTurn(): void {
		this.burnCard();
		this.dealCard();
	}

	public dealRiver(): void {
		this.burnCard();
		this.dealCard();
	}

	public gatherCards(): void {
		this.deck.recallCards();
		this.burnedCards = [];
		this.communityCards = [];
	}

	public printCommunity(): void {
		console.log('~~~~~ Table Cards: ')
		for (let i = 0; i < this.communityCards.length; i++) {
			this.communityCards[i].print();
		}
	}

	public printBurned(): void {
		console.log('~~~~~ Burned Cards: ')
		for (let i = 0; i < this.burnedCards.length; i++) {
			this.burnedCards[i].print();
		}
	}
}