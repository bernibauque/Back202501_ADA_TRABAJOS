// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para 
// clasificarla en niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')();

const clasificarEdad = (edad) => {
    if (edad < 13) return "Niño";
    else if (edad < 18) return "Adolescente";
    else if (edad < 65) return "Adulto";
    else return "Adulto mayor";
};

let edad = parseInt(prompt("Ingresa una edad:"));
let clasificacion = clasificarEdad(edad);

console.log(`La clasificación de la edad es: ${clasificacion}`);
