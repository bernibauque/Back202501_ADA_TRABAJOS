// Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.

const prompt = require('prompt-sync')();

function calcularCircunferencia() {
    const radio = parseFloat(prompt("Ingrese el radio del círculo: "));

    // Calcular la circunferencia
    const circunferencia = 2 * Math.PI * radio;

    console.log(`La circunferencia del círculo es: ${circunferencia}`);
}

calcularCircunferencia();
