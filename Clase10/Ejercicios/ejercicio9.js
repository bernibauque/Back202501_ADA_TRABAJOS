let peso = parseFloat(prompt("Ingresa tu peso en kg: "));
let altura = parseFloat(prompt("Ingresa tu altura en metros: "));

let imc = peso / (altura * altura);
console.log(`Tu IMC es ${imc.toFixed(2)}.`);  // Mostramos el IMC con 2 decimales.
