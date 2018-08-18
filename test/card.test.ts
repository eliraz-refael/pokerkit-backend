import Card, { Suit, Value } from '../card';
import { expect } from 'chai';

describe('test card identity', () => {
	it('should create the 10 of diamonds', () => {
		let card = new Card(Value.T, Suit.Diamonds);
		expect(card.value).to.equal(Value.T);
		expect(card.suit).to.equal(Suit.Diamonds);
		expect(card.literal).to.deep.equal({
			suit: 'Diamonds',
			value: 'T'
		});
	});
});