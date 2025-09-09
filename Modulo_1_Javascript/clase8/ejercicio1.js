// Ejercicio 1: 
// Declara dos variables numéricas numero1 y numero2. 
// Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}.`);
} else if (numero2 > numero1) {
    console.log(`El número ${numero2} es mayor que ${numero1}.`);
} else {
    console.log("Ambos números son iguales.");
}
