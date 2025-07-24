import { createPerson, Person } from './types';

const person: Person = createPerson('John', 30);
console.log(`Person: ${person.name}, Age: ${person.age}`);
