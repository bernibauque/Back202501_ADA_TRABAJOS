const prompt = require('prompt-sync')();
let edades = [];

// Variable para controlar la entrada del usuario
let continuar = true;

// Contador para manejar las edades
let contador = 0;

// Registrar edades con un bucle do-while
do {
    contador++;
    let edad = parseInt(prompt(`Ingrese la edad de la mascota ${contador}:`));
    edades[contador - 1] = edad; // Asignar la edad directamente al índice del array

    let respuesta = prompt("¿Desea agregar la edad de otra mascota? (sí/no)");
    continuar = (respuesta === "sí" || respuesta === "si");

} while (continuar);

// Mostrar todas las edades registradascon while
console.log("Edades registradas:");
let i = 0;
while (i < edades.length) {
    console.log(`Mascota ${i + 1}: ${edades[i]} años`);
    i++;
}
