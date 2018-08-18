import Dealer from './dealer';

let dealer = new Dealer();

console.log(dealer.deck.cards.length);
dealer.dealFlop();
dealer.printCommunity();
dealer.printBurned();
dealer.dealTurn();
dealer.printCommunity();
dealer.printBurned();
dealer.dealRiver();
dealer.printCommunity();
dealer.printBurned();
console.log(dealer.deck.cards.length);
dealer.gatherCards();
console.log(dealer.deck.cards.length);