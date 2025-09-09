// Ejercicio para clase 2: Cálculo de descuento por edad
// (Antes era el ejercicio 6)
// Solicita al usuario su edad y usa una función flecha
// para aplicar un descuento dependiendo de la edad.

/*
Puedes tomar punto de partida los siguientes datos: 
✓ 65 anos = 15% de descuento 
✓ Menor a 65 = No hay descuento
*/

const prompt = require('prompt-sync')();

const calcularDescuentoPorEdad = (edad) => {
    let descuento = (edad >= 65) ? 0.15 : 0;
    return descuento;
};

let edad = parseInt(prompt("Ingresa tu edad: "));
let descuento = calcularDescuentoPorEdad(edad);

if (descuento > 0) {
    console.log(`Tienes un descuento del ${descuento * 100}% por ser adulto mayor`);
} else {
    console.log('No tienes descuentos por edad.')
}


