// importamos el modulo readline-sync
const readlineSync = require('readline-sync')

const nombre = readlineSync.question('Ingrese su nombre: ')
const edad = readlineSync.question('Ingrese su edad: ')

console.log(`Hola ${nombre}! tienes ${edad} anios`);


