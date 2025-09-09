// Ejercicio: Calculadora de Descuento
// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
// Pide al usuario que ingrese el precio original del producto y el porcentaje de descuento,
// y muestra el precio final.

const prompt = require('prompt-sync')();

// 1. Pedir al usuario el precio original del producto.
let precioOriginal = prompt('Ingresa el precio original del producto: ');

// 2. Pedir al usuario el porcentaje de descuento.
let porcentajeDescuento = prompt('Ingresa el porcentaje de descuento: ');

// 3. Calcular el descuento
let descuento = (precioOriginal * porcentajeDescuento) / 100;

// 4. Calcular el precio final
let precioFinal = precioOriginal - descuento;

// 5. Mostrar el precio final al usuario
console.log('El precio final después del descuento es:', precioFinal);


