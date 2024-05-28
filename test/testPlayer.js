const { expect } = require('chai');
const Player = require('../src/Player');

describe('Player', () => {
    it('should create a player with given attributes', () => {
        const player = new Player(50, 5, 10);
        expect(player.getHealth()).to.equal(50);
        expect(player.getStrength()).to.equal(5);
        expect(player.getAttack()).to.equal(10);
    });

    it('should reduce health correctly', () => {
        const player = new Player(50, 5, 10);
        player.reduceHealth(20);
        expect(player.getHealth()).to.equal(30);
        player.reduceHealth(40);
        expect(player.getHealth()).to.equal(0);
    });

    it('should check if the player is alive correctly', () => {
        const player = new Player(50, 5, 10);
        expect(player.isAlive()).to.be.true;
        player.reduceHealth(50);
        expect(player.isAlive()).to.be.false;
    });
});
