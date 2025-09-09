// Ejercicio 4: Do while
// Escribe un programa que solicite al usuario ingresar una 
// contraseña. Si la contraseña es incorrecta, debe volver a
// pedirla hasta que el usuario ingrese la correcta. 
// La contraseña correcta es "1234".

const prompt = require('prompt-sync')();

let password;
do {
    password = prompt("Ingrese la contraseña:");
} while (password !== "1234");
console.log("Contraseña correcta");
