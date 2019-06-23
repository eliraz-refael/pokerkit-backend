export enum Suit {
	Hearts,
	Spades,
	Diamonds,
	Clubs
}

export enum Value {
	A = 14,
	K = 13,
	Q = 12,
	J = 11,
	T = 10,
	C9 = 9,
	C8 = 8,
	C7 = 7,
	C6 = 6,
	C5 = 5,
	C4 = 4,
	C3 = 3,
	C2 = 2,
}

export interface ICard {
	suit: Suit;
	value: Value;
	literal: {
		suit: string;
		value: string | number;
	}
}

let SuitKeys = Object.keys(Suit);
let SuitValues = Object.values(Suit);
let ValueKeys = Object.keys(Value);
let ValueValues = Object.values(Value)

function getSuitKeyByValue(value: any) {
	let key = SuitValues.indexOf(value);
	return SuitKeys[key];
}

function getValueKeyByValue(value: any) {
	let key = ValueValues.indexOf(value);
	return ValueKeys[key];
}

export default class Card implements ICard {

	public literal: { suit: string; value: string | number; };
	public suit: Suit;
	public value: Value;
	
	public constructor(value: Value, suit: Suit) {
		this.suit = suit;
		this.value = value;
		this.literal = {
			suit: getSuitKeyByValue(suit),
			value: getValueKeyByValue(value)
		}
	}

	public print(): void {
		console.log(`Card: ${this.literal.value} of ${this.literal.suit}`);
	}

};