const prompt = require('prompt-sync')();

// Generamos un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("¡Bienvenida al juego de adivinar el número!");
console.log("La computadora ha elegido un número entre 1 y 10.");
console.log("Tienes 3 intentos para adivinarlo.");

// Usamos un ciclo for para dar al usuario hasta 3 intentos
let acertado = false;

for (let intento = 1; intento <= 3; intento++) {
    // Solicitamos al usuario que adivine el número
    let numeroUsuario = parseInt(prompt(`Intento ${intento}: Ingresa tu número: `));

    // Verificamos si el usuario acertó
    if (numeroUsuario === numeroSecreto) {
        console.log(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en el intento ${intento}.`);
        acertado = true; // Marcamos que el número fue adivinado
        break; // Salimos del ciclo porque ya acertó
    } else {
        console.log("Número incorrecto. Intenta de nuevo.");
    }
}

// Si el usuario no acertó después de los 3 intentos
if (!acertado) {
    console.log(`¡Oh no! No lograste adivinar el número secreto, que era ${numeroSecreto}.`);
}
