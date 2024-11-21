const prompt = require('prompt-sync')();

// Solicitamos al usuario los valores de inicio y fin
let inicio = parseInt(prompt("Ingresa el número inicial: "));
let fin = parseInt(prompt("Ingresa el número final: "));

// Verificamos si el rango es válido
if (inicio > fin) {
    console.log("El número inicial no puede ser mayor que el número final. Intenta de nuevo.");
} else {
    console.log(`Los números pares entre ${inicio} y ${fin} son:`);

    // Usamos un ciclo for para recorrer el rango
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i); // Imprimimos solo los números pares
        }
    }
}
