import { expect } from 'chai';
import playerManager from '../player/player.manager';

describe('Player Manager tests', () => {

	it('should return null when there are no players in the list', () => {
		let player = playerManager.getPlayerById('532gfds');
		expect(player).to.equal(null);
	});

});