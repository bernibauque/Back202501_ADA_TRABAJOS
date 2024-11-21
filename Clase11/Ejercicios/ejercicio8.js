const prompt = require('prompt-sync')();

// Solicitamos al usuario un número
let numero = parseInt(prompt("Ingresa un número entero positivo: "));

// Verificamos si el número es positivo
if (numero > 0) {
    console.log(`Los múltiplos de ${numero} entre 1 y 100 son:`);

    // Usamos un ciclo for para encontrar los múltiplos
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Debes ingresar un número entero positivo.");
}
