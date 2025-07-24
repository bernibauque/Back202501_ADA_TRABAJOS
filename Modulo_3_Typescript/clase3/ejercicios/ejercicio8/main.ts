import createMultiplier from './higherOrderFunctions';

const multiplier = createMultiplier(2);
console.log('Result: ', multiplier(10)); // Multiplicará 10 * 2
