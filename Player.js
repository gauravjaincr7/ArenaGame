class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    getHealth() {
        return this.health;
    }

    getStrength() {
        return this.strength;
    }

    getAttack() {
        return this.attack;
    }

    reduceHealth(amount) {
        this.health = Math.max(this.health - amount, 0);
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;