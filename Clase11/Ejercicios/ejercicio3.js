const prompt = require('prompt-sync')();

// Solicitamos un número al usuario
let limite = parseInt(prompt("Ingresa un número positivo: "));

// Verificamos que el número sea válido
if (limite > 0) {
    console.log("Contemos desde 1 hasta " + limite + ":");

    // Usamos un ciclo for para contar
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
} else {
    console.log("Debes ingresar un número positivo.");
}
