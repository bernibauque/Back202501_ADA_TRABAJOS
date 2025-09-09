// Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto 
// después de aplicar un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento,
// y muestra el precio final.

const prompt = require("prompt-sync")();

// Pedir al usuario que ingrese el precio original y el porcentaje de descuento
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

// Calcular el monto del descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// Calcular el precio final después del descuento
let precioFinal = precioOriginal - montoDescuento;

// Mostrar el precio final después del descuento
console.log("El precio final después de aplicar un descuento del " + porcentajeDescuento + "% es: " + precioFinal);
