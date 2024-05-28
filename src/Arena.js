const Player = require('./Player');
const Dice = require('./Dice');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    startFight() {
        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            this.fightRound();
        }
    }

    fightRound() {
        let firstAttacker = this.playerA.getHealth() < this.playerB.getHealth() ? this.playerA : this.playerB;
        let secondAttacker = firstAttacker === this.playerA ? this.playerB : this.playerA;

        this.executeAttack(firstAttacker, secondAttacker);
        if (secondAttacker.isAlive()) {
            this.executeAttack(secondAttacker, firstAttacker);
        }
    }

    executeAttack(attacker, defender) {
        let attackRoll = Dice.roll();
        let defendRoll = Dice.roll();

        let attackDamage = attacker.getAttack() * attackRoll;
        let defendDamage = defender.getStrength() * defendRoll;

        let damageToDefender = Math.max(attackDamage - defendDamage, 0);
        defender.reduceHealth(damageToDefender);

        console.log(`${attacker === this.playerA ? 'Player A' : 'Player B'} attacks ${defender === this.playerA ? 'Player A' : 'Player B'}: Attack Roll = ${attackRoll}, Defend Roll = ${defendRoll}, Damage = ${damageToDefender}, ${defender === this.playerA ? 'Player A\'s' : 'Player B\'s'} Health = ${defender.getHealth()}`);
    }


}

module.exports = Arena;
