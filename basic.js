// // let acId = 121324;
// // let acName = "bcjbdc";
// // let acBalance = 1000;

// // console.table( [acId, acName, acBalance ]); 

// // // Random JS Simulation: Digital Ecosystem

// // class Creature {
// //     constructor(name, energy = 100) {
// //         this.name = name;
// //         this.energy = energy;
// //         this.alive = true;
// //         this.age = 0;
// //     }

// //     eat(amount) {
// //         if (!this.alive) return;
// //         this.energy += amount;
// //         log(`${this.name} eats and gains ${amount} energy.`);
// //     }

// //     move() {
// //         if (!this.alive) return;
// //         this.energy -= 5;
// //         log(`${this.name} moves and loses 5 energy.`);
// //         this.checkStatus();
// //     }

// //     growOlder() {
// //         if (!this.alive) return;
// //         this.age++;
// //         this.energy -= 2;
// //         this.checkStatus();
// //     }

// //     checkStatus() {
// //         if (this.energy <= 0) {
// //             this.alive = false;
// //             log(`${this.name} has died.`);
// //         }
// //     }
// // }

// // class Predator extends Creature {
// //     hunt(prey) {
// //         if (!this.alive || !prey.alive) return;
// //         const success = Math.random() > 0.4;
// //         if (success) {
// //             this.energy += 30;
// //             prey.energy = 0;
// //             prey.checkStatus();
// //             log(`${this.name} hunted ${prey.name}.`);
// //         } else {
// //             this.energy -= 10;
// //             log(`${this.name} failed to hunt ${prey.name}.`);
// //         }
// //         this.checkStatus();
// //     }
// // }

// // class Environment {
// //     constructor() {
// //         this.creatures = [];
// //         this.cycle = 0;
// //     }

// //     addCreature(creature) {
// //         this.creatures.push(creature);
// //     }

// //     simulateStep() {
// //         this.cycle++;
// //         log(`--- Cycle ${this.cycle} ---`);

// //         for (let creature of this.creatures) {
// //             if (!creature.alive) continue;
// //             creature.move();
// //             creature.growOlder();

// //             if (creature instanceof Predator) {
// //                 const prey = this.getRandomPrey();
// //                 if (prey) creature.hunt(prey);
// //             } else {
// //                 creature.eat(randomInt(5, 15));
// //             }
// //         }

// //         this.cleanDead();
// //     }

// //     getRandomPrey() {
// //         const preyList = this.creatures.filter(c => !(c instanceof Predator) && c.alive);
// //         if (preyList.length === 0) return null;
// //         return preyList[randomInt(0, preyList.length - 1)];
// //     }

// //     cleanDead() {
// //         this.creatures = this.creatures.filter(c => c.alive);
// //     }
// // }

// // function randomInt(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// // function log(message) {
// //     console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
// // }

// // // Closure example
// // function energyMonitor() {
// //     let total = 0;
// //     return function (creatures) {
// //         total = creatures.reduce((sum, c) => sum + c.energy, 0);
// //         console.log("Total Energy:", total);
// //     };
// // }

// // // Generator example
// // function* idGenerator() {
// //     let id = 1;
// //     while (true) {
// //         yield id++;
// //     }
// // }

// // const generateId = idGenerator();

// // const env = new Environment();
// // const monitor = energyMonitor();

// // // Create creatures
// // for (let i = 0; i < 5; i++) {
// //     env.addCreature(new Creature(`Herbivore-${generateId.next().value}`));
// // }

// // for (let i = 0; i < 2; i++) {
// //     env.addCreature(new Predator(`Predator-${generateId.next().value}`));
// // }

// // // Recursive function example
// // function countdown(n) {
// //     if (n <= 0) return;
// //     log(`Simulation starts in ${n}`);
// //     countdown(n - 1);
// // }

// // // Async simulation
// // function runSimulation(steps, delay = 1000) {
// //     let currentStep = 0;

// //     const interval = setInterval(() => {
// //         if (currentStep >= steps || env.creatures.length === 0) {
// //             clearInterval(interval);
// //             log("Simulation ended.");
// //             return;
// //         }

// //         env.simulateStep();
// //         monitor(env.creatures);
// //         currentStep++;
// //     }, delay);
// // }

// // // Utility function using map/filter/reduce
// // function analyzePopulation(creatures) {
// //     const stats = creatures.reduce(
// //         (acc, c) => {
// //             acc.total++;
// //             acc.totalEnergy += c.energy;
// //             if (c instanceof Predator) acc.predators++;
// //             else acc.herbivores++;
// //             return acc;
// //         },
// //         { total: 0, predators: 0, herbivores: 0, totalEnergy: 0 }
// //     );

// //     stats.avgEnergy = stats.total > 0 ? stats.totalEnergy / stats.total : 0;
// //     return stats;
// // }

// // // Start
// // countdown(3);
// // runSimulation(10, 500);

// // // After 6 seconds, print analysis
// // setTimeout(() => {
// //     const stats = analyzePopulation(env.creatures);
// //     console.log("Final Stats:", stats);
// // }, 6000);


// // // ====== SEEDED RANDOM (Deterministic) ======
// // class SeededRandom {
// //     constructor(seed = 12345) {
// //         this.seed = seed;
// //     }

// //     next() {
// //         this.seed = (this.seed * 16807) % 2147483647;
// //         return this.seed / 2147483647;
// //     }

// //     int(min, max) {
// //         return Math.floor(this.next() * (max - min + 1)) + min;
// //     }
// // }

// // const rng = new SeededRandom(42);

// // // ====== EVENT SYSTEM ======
// // class EventBus {
// //     constructor() {
// //         this.listeners = {};
// //     }

// //     on(event, handler) {
// //         if (!this.listeners[event]) this.listeners[event] = [];
// //         this.listeners[event].push(handler);
// //     }

// //     emit(event, payload) {
// //         if (!this.listeners[event]) return;
// //         for (const handler of this.listeners[event]) {
// //             handler(payload);
// //         }
// //     }
// // }

// // const eventBus = new EventBus();

// // // ====== DNA SYSTEM ======
// // class DNA {
// //     constructor({ speed, efficiency, aggression }) {
// //         this.speed = speed;
// //         this.efficiency = efficiency;
// //         this.aggression = aggression;
// //     }

// //     static random() {
// //         return new DNA({
// //             speed: rng.int(1, 10),
// //             efficiency: rng.int(1, 10),
// //             aggression: rng.int(1, 10)
// //         });
// //     }

// //     mutate() {
// //         const mutateValue = v => Math.max(1, Math.min(10, v + rng.int(-1, 1)));
// //         return new DNA({
// //             speed: mutateValue(this.speed),
// //             efficiency: mutateValue(this.efficiency),
// //             aggression: mutateValue(this.aggression)
// //         });
// //     }
// // }

// // // ====== BASE CREATURE ======
// // class Creature {
// //     constructor(name, dna, energy = 100) {
// //         this.name = name;
// //         this.dna = dna;
// //         this.energy = energy;
// //         this.age = 0;
// //         this.alive = true;
// //         this.memory = [];
// //     }

// //     think(environment) {
// //         // Primitive decision system
// //         if (this.energy < 30) return "search_food";
// //         if (this.energy > 120) return "reproduce";
// //         return "wander";
// //     }

// //     act(environment) {
// //         if (!this.alive) return;

// //         const decision = this.think(environment);
// //         this.memory.push(decision);

// //         switch (decision) {
// //             case "search_food":
// //                 this.searchFood(environment);
// //                 break;
// //             case "reproduce":
// //                 this.reproduce(environment);
// //                 break;
// //             default:
// //                 this.wander();
// //         }

// //         this.age++;
// //         this.energy -= 2;
// //         this.checkStatus();
// //     }

// //     wander() {
// //         const cost = 5 - Math.floor(this.dna.speed / 3);
// //         this.energy -= cost;
// //         eventBus.emit("log", `${this.name} wanders (cost ${cost})`);
// //     }

// //     searchFood(environment) {
// //         const baseFood = environment.currentFoodSupply();
// //         const gained = Math.floor(baseFood * (this.dna.efficiency / 10));
// //         this.energy += gained;
// //         eventBus.emit("log", `${this.name} found ${gained} energy from food`);
// //     }

// //     reproduce(environment) {
// //         if (this.energy < 80) return;

// //         const childDNA = this.dna.mutate();
// //         const child = new Creature(
// //             `${this.name}-child-${rng.int(1000, 9999)}`,
// //             childDNA,
// //             60
// //         );

// //         this.energy -= 50;
// //         environment.addCreature(child);
// //         eventBus.emit("birth", child);
// //     }

// //     checkStatus() {
// //         if (this.energy <= 0 || this.age > 100) {
// //             this.alive = false;
// //             eventBus.emit("death", this);
// //         }
// //     }
// // }

// // // ====== PREDATOR ======
// // class Predator extends Creature {
// //     think(environment) {
// //         if (this.energy < 50) return "hunt";
// //         return super.think(environment);
// //     }

// //     hunt(environment) {
// //         const prey = environment.randomHerbivore();
// //         if (!prey) return;

// //         const successChance = this.dna.aggression / 10;
// //         if (rng.next() < successChance) {
// //             this.energy += prey.energy;
// //             prey.energy = 0;
// //             prey.checkStatus();
// //             eventBus.emit("log", `${this.name} hunted ${prey.name}`);
// //         } else {
// //             this.energy -= 10;
// //             eventBus.emit("log", `${this.name} failed hunt`);
// //         }
// //     }

// //     act(environment) {
// //         if (!this.alive) return;

// //         if (this.think(environment) === "hunt") {
// //             this.hunt(environment);
// //         } else {
// //             super.act(environment);
// //         }

// //         this.age++;
// //         this.energy -= 3;
// //         this.checkStatus();
// //     }
// // }

// // // ====== SEASONS ======
// // class SeasonSystem {
// //     constructor() {
// //         this.seasons = ["Spring", "Summer", "Autumn", "Winter"];
// //         this.index = 0;
// //     }

// //     next() {
// //         this.index = (this.index + 1) % this.seasons.length;
// //     }

// //     current() {
// //         return this.seasons[this.index];
// //     }

// //     foodModifier() {
// //         switch (this.current()) {
// //             case "Winter": return 0.3;
// //             case "Summer": return 1.5;
// //             default: return 1.0;
// //         }
// //     }
// // }

// // // ====== ENVIRONMENT ======
// // class Environment {
// //     constructor() {
// //         this.creatures = [];
// //         this.seasonSystem = new SeasonSystem();
// //         this.cycle = 0;
// //         this.history = [];
// //     }

// //     addCreature(creature) {
// //         this.creatures.push(creature);
// //     }

// //     currentFoodSupply() {
// //         return 20 * this.seasonSystem.foodModifier();
// //     }

// //     randomHerbivore() {
// //         const list = this.creatures.filter(c => !(c instanceof Predator) && c.alive);
// //         if (list.length === 0) return null;
// //         return list[rng.int(0, list.length - 1)];
// //     }

// //     step() {
// //         this.cycle++;
// //         if (this.cycle % 10 === 0) this.seasonSystem.next();

// //         for (const creature of [...this.creatures]) {
// //             creature.act(this);
// //         }

// //         this.creatures = this.creatures.filter(c => c.alive);
// //         this.recordStats();
// //     }

// //     recordStats() {
// //         const predators = this.creatures.filter(c => c instanceof Predator).length;
// //         const herbivores = this.creatures.length - predators;

// //         this.history.push({
// //             cycle: this.cycle,
// //             predators,
// //             herbivores,
// //             season: this.seasonSystem.current()
// //         });
// //     }
// // }

// // // ====== ASYNC SIMULATION LOOP ======
// // async function runSimulation(env, steps = 50, delay = 200) {
// //     for (let i = 0; i < steps; i++) {
// //         env.step();
// //         await new Promise(res => setTimeout(res, delay));
// //     }
// // }

// // // ====== LOGGING ======
// // eventBus.on("log", msg => console.log("[LOG]", msg));
// // eventBus.on("birth", c => console.log("[BIRTH]", c.name));
// // eventBus.on("death", c => console.log("[DEATH]", c.name));

// // // ====== INIT ======
// // const env = new Environment();

// // for (let i = 0; i < 8; i++) {
// //     env.addCreature(new Creature(`Herb-${i}`, DNA.random()));
// // }

// // for (let i = 0; i < 3; i++) {
// //     env.addCreature(new Predator(`Pred-${i}`, DNA.random()));
// // }

// // runSimulation(env, 60, 100).then(() => {
// //     console.log("Simulation finished.");
// //     console.table(env.history);
// // });

// // function sum ( a , b , c){
// //     return a + b + c ;
// // }
// //  console.log(sum ( parseInt("5") , 10 , 15 ) );


// function sum ( a , b , c){
//     return a + b + c ;
// }

// function mul ( a , b , c){
//     return a * b * c ;
// }

// function doo ( a , b , c , operation ){
//     return ( operation ( a , b , c ) );
// }

//  console.log(doo ( 5 , 5 ,5 , mul )) ;

const fs = require('fs');;
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});