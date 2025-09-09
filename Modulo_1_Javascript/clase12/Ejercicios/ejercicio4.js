// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario. 
// Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt = require('prompt-sync')();

const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let descuento = 0;
    if (cantidad > 10) descuento = 0.15;
    else if (cantidad > 5) descuento = 0.10;
    return (cantidad * precioUnitario) * (1 - descuento);
};

let cantidad = parseInt(prompt("Ingresa la cantidad de productos comprados:"));
let precioUnitario = parseFloat(prompt("Ingresa el precio unitario del producto:"));
let total = calcularTotalConDescuento(cantidad, precioUnitario);

console.log(`El total a pagar con descuento es: ${total}`);
