// Dado un número entero positivo, mostrar su factorial.

const prompt = require('prompt-sync')();

function calcularFactorial() {
    const numero = parseInt(prompt("Ingrese un número entero positivo: "), 10);
    let factorial = 1;

    // Calcular el factorial del número
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es ${factorial}`);
}

calcularFactorial();
