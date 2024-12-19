// Pedimos el peso en kilogramos
let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos:"));

// Convertimos a libras
let pesoLibras = pesoKg * 2.20462;
console.log(`Tu peso en libras es: ${pesoLibras.toFixed(2)} libras`);
