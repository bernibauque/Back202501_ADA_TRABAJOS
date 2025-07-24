import { add, reverse, User } from './utils';

console.log('Sum: ', add(8, 4));
console.log('Reversed String: ', reverse('typescript'));

const user = new User('Bob', 40);
console.log(`User: ${user.name}, Age: ${user.age}`);
