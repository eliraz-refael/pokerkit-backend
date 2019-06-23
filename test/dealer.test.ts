import Card, { Suit, Value } from '../card/card';
import { expect } from 'chai';
import Dealer from '../dealer/dealer';

describe('Dealer tests', () => {
	let dealer = Dealer.getInstance();
	it('should deal 3 cards as the flop and have left with 48 (one card got burned)', () => {
		dealer.dealFlop();
		expect(dealer.communityCards.length).to.equal(3);
		expect(dealer.burnedCards.length).to.equal(1);
		expect(dealer.deck.cards.length).to.equal(52 - 4);
	});

	it('should deal a turn and burn on card and have 46 cards left', () => {
		dealer.dealTurn();
		expect(dealer.communityCards.length).to.equal(4);
		expect(dealer.burnedCards.length).to.equal(2);
		expect(dealer.deck.cards.length).to.equal(52 - 6);
	});

	it('should deal a turn and burn on card and have 44 cards left', () => {
		dealer.dealRiver();
		expect(dealer.communityCards.length).to.equal(5);
		expect(dealer.burnedCards.length).to.equal(3);
		expect(dealer.deck.cards.length).to.equal(52 - 8);
	});


	it('should recall all cards and have 52 in total on deck', () => {
		dealer.gatherCards();
		expect(dealer.communityCards.length).to.equal(0);
		expect(dealer.burnedCards.length).to.equal(0);
		expect(dealer.deck.cards.length).to.equal(52);
	});
});