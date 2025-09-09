// Ejercicio 5:
// Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla.
// 1.	Crear un array para almacenar las notas:
// 2.	Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
// 3.	Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
// 4.	Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
// 5.	Imprime en consola las notas ingresadas usando el array notas.

const prompt = require('prompt-sync')();

// Paso 1: Crear un array para almacenar las notas
let notas = [];

// Paso 2: Solicitar las notas al usuario
const cantidadEstudiantes = 3; // Ejemplo: Solicitar notas para 3 estudiantes

console.log(`Ingresa las notas de ${cantidadEstudiantes} estudiantes:`);

for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota = parseFloat(prompt(`Nota del estudiante ${i + 1}: `));
    notas[i] = nota; // Asignar la nota directamente al índice del array
}

// Paso 3: Mostrar las notas ingresadas
console.log("\nNotas ingresadas:");
for (let i = 0; i < notas.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}

