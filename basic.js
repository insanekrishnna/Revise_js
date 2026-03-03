let acId = 121324;
let acName = "bcjbdc";
let acBalance = 1000;

console.table( [acId, acName, acBalance ]); 

// Random JS Simulation: Digital Ecosystem

class Creature {
    constructor(name, energy = 100) {
        this.name = name;
        this.energy = energy;
        this.alive = true;
        this.age = 0;
    }

    eat(amount) {
        if (!this.alive) return;
        this.energy += amount;
        log(`${this.name} eats and gains ${amount} energy.`);
    }

    move() {
        if (!this.alive) return;
        this.energy -= 5;
        log(`${this.name} moves and loses 5 energy.`);
        this.checkStatus();
    }

    growOlder() {
        if (!this.alive) return;
        this.age++;
        this.energy -= 2;
        this.checkStatus();
    }

    checkStatus() {
        if (this.energy <= 0) {
            this.alive = false;
            log(`${this.name} has died.`);
        }
    }
}

class Predator extends Creature {
    hunt(prey) {
        if (!this.alive || !prey.alive) return;
        const success = Math.random() > 0.4;
        if (success) {
            this.energy += 30;
            prey.energy = 0;
            prey.checkStatus();
            log(`${this.name} hunted ${prey.name}.`);
        } else {
            this.energy -= 10;
            log(`${this.name} failed to hunt ${prey.name}.`);
        }
        this.checkStatus();
    }
}

class Environment {
    constructor() {
        this.creatures = [];
        this.cycle = 0;
    }

    addCreature(creature) {
        this.creatures.push(creature);
    }

    simulateStep() {
        this.cycle++;
        log(`--- Cycle ${this.cycle} ---`);

        for (let creature of this.creatures) {
            if (!creature.alive) continue;
            creature.move();
            creature.growOlder();

            if (creature instanceof Predator) {
                const prey = this.getRandomPrey();
                if (prey) creature.hunt(prey);
            } else {
                creature.eat(randomInt(5, 15));
            }
        }

        this.cleanDead();
    }

    getRandomPrey() {
        const preyList = this.creatures.filter(c => !(c instanceof Predator) && c.alive);
        if (preyList.length === 0) return null;
        return preyList[randomInt(0, preyList.length - 1)];
    }

    cleanDead() {
        this.creatures = this.creatures.filter(c => c.alive);
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function log(message) {
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

// Closure example
function energyMonitor() {
    let total = 0;
    return function (creatures) {
        total = creatures.reduce((sum, c) => sum + c.energy, 0);
        console.log("Total Energy:", total);
    };
}

// Generator example
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const generateId = idGenerator();

const env = new Environment();
const monitor = energyMonitor();

// Create creatures
for (let i = 0; i < 5; i++) {
    env.addCreature(new Creature(`Herbivore-${generateId.next().value}`));
}

for (let i = 0; i < 2; i++) {
    env.addCreature(new Predator(`Predator-${generateId.next().value}`));
}

// Recursive function example
function countdown(n) {
    if (n <= 0) return;
    log(`Simulation starts in ${n}`);
    countdown(n - 1);
}

// Async simulation
function runSimulation(steps, delay = 1000) {
    let currentStep = 0;

    const interval = setInterval(() => {
        if (currentStep >= steps || env.creatures.length === 0) {
            clearInterval(interval);
            log("Simulation ended.");
            return;
        }

        env.simulateStep();
        monitor(env.creatures);
        currentStep++;
    }, delay);
}

// Utility function using map/filter/reduce
function analyzePopulation(creatures) {
    const stats = creatures.reduce(
        (acc, c) => {
            acc.total++;
            acc.totalEnergy += c.energy;
            if (c instanceof Predator) acc.predators++;
            else acc.herbivores++;
            return acc;
        },
        { total: 0, predators: 0, herbivores: 0, totalEnergy: 0 }
    );

    stats.avgEnergy = stats.total > 0 ? stats.totalEnergy / stats.total : 0;
    return stats;
}

// Start
countdown(3);
runSimulation(10, 500);

// After 6 seconds, print analysis
setTimeout(() => {
    const stats = analyzePopulation(env.creatures);
    console.log("Final Stats:", stats);
}, 6000);