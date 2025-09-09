// Ejercicio 5: Flores Favoritas
// Escribe un programa en JavaScript para contar cuántas veces el 
// usuario menciona sus flores favoritas. Utiliza un array para 
// almacenar las flores favoritas y realiza las siguientes acciones:
// 1.	Inicializa un array vacío para almacenar las flores favoritas.
// 2.	Pregunta al usuario por sus tres flores favoritas utilizando
// prompt y agrega cada una al array (aquí usa un método de los vistos
// en Arrays)
// 3.	Pregunta al usuario por una flor específica y verifica si está 
// entre sus favoritas (aquí usa un método de los vistos en Arrays)
// 4.	Muestra por consola cuántas de las flores favoritas se 
// mencionaron.


const prompt = require('prompt-sync')();
let floresFavoritas = []; // hacemos el array vacio primero

// Preguntamos al usuario por sus flores favoritas y agregarlas al array
for (let i = 0; i < 3; i++) {
    let flor = prompt(`Ingrese una de sus flores favoritas ( solo 3):`);
    floresFavoritas.push(flor);
}

// Mostrar las flores favoritas almacenadas
console.log('Flores favoritas:', floresFavoritas);

// Preguntar al usuario por una flor específica y verificar si está entre las favoritas
let florBuscar = prompt('Ingrese una flor para verificar si está entre sus favoritas:');
if (floresFavoritas.includes(florBuscar)) {
    console.log(`${florBuscar} está entre sus flores favoritas.`);
} else {
    console.log(`${florBuscar} no está entre sus flores favoritas.`);
}

// Mostrar la cantidad de flores favoritas mencionadas
console.log(`Número de flores favoritas mencionadas: ${floresFavoritas.length}`);



