// Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el
// porcentaje de IVA.
// Usa una función flecha para calcular el precio final.

// EJERCICIO RESUELTO EN CLASES 

const prompt = require('prompt-sync')();

const calcularPrecioIva = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingresa el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA (solo numero): "));
let precioFinal = calcularPrecioIva(precio, iva);

console.log(`El precio final con IVA es: ${precioFinal}`);


