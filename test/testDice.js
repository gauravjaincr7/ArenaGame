const { expect } = require('chai');
const Dice = require('../src/Dice');

describe('Dice', () => {
    it('should roll a number between 1 and 6', () => {
        for (let i = 0; i < 100; i++) {
            const roll = Dice.roll();
            expect(roll).to.be.at.least(1);
            expect(roll).to.be.at.most(6);
        }
    });
});
