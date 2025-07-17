const readlineSync = require('readline-sync');

// Solicitar al usuario que ingrese su nombre
const nombre = readlineSync.question('¿Cuál es tu nombre? ');

// Solicitar al usuario que ingrese su edad
const edad = readlineSync.questionInt('¿Cuántos años tienes? ');

// Mostrar un mensaje personalizado con el nombre y la edad del usuario
console.log(`Hola, ${nombre}! Tienes ${edad} años.`);
