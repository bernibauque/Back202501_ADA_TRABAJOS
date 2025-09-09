// Ejercicio 2: Verificar estado de vacunación (Antes era ejercicio 7)
// Solicita al usuario el nombre de su mascota y si está vacunada. 
// Usa una función flecha para verificar y mostrar su estado de vacunación.

const prompt = require('prompt-sync')();

const verificarVacunacion = (nombre, vacunada) => {
    if (vacunada === 'si') {
        return `${nombre} está vacunada.`;
    } else if (vacunada === 'no') {
        return `${nombre} no está vacunada.`;
    } else {
        return `Respuesta no válida para ${nombre}.`;
    }
};

let nombreMascota = prompt("Ingresa el nombre de tu mascota:");
let estadoVacunacion = prompt("¿Está vacunada? (responde 'si' o 'no'):");
let resultado = verificarVacunacion(nombreMascota, estadoVacunacion);

console.log(resultado);
