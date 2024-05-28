const { expect } = require('chai');
const Player = require('../src/Player');
const Arena = require('../src/Arena');

describe('Arena', () => {
    it('should end the game when a player\'s health reaches 0', () => {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(100, 10, 5);
        const arena = new Arena(playerA, playerB);

        arena.startFight();

        expect(playerA.getHealth() === 0 || playerB.getHealth() === 0).to.be.true;
    });
});
