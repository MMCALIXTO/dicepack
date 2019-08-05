import collect from './collect.js';
import rollDie from './rollDie.js';

const rollDice = (dice, detailed) => collect(dice.map(rollDie), detailed, dice);

export default rollDice;
