const prompt = require('prompt-sync')();  // Requerimos el paquete para usar prompt.

let nombre = prompt("Ingresa tu nombre: ");  // Pedimos el nombre del usuario.
let edad = prompt("Ingresa tu edad: ");  // Pedimos la edad.
let peso = prompt("Ingresa tu peso: ");  // Pedimos el peso.

console.log(`Hola, ${nombre}. Tienes ${edad} años y pesas ${peso} kg.`);  // Mostramos el mensaje.
