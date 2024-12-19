// Pedimos al usuario tres números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Determinamos el mayor
let mayor = Math.max(num1, num2, num3);
console.log(`El mayor de los tres números es: ${mayor}`);
