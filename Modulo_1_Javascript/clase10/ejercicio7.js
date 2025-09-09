// Ejercicio 7:  Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres
// y los almacene en un array. Luego, solicita al usuario ingresar
// un nombre y verifica si ese nombre se encuentra en el array.

let nombres = [];

// Paso 1: Solicitar 5 nombres y almacenarlos en el array
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}:`);
    nombres[i] = nombre;  // Asignación directa al array
}

// Paso 2: Solicitar el nombre a buscar
let nombreBuscar = prompt("Ingrese un nombre para buscar:");

// Paso 3: Verificar si el nombre está en el array
let encontrado = false;
for (let i = 0; i < 5; i++) {  // Iterar sobre los 5 elementos
    if (nombres[i] === nombreBuscar) {
        encontrado = true;
        break;  // Salir del bucle si se encuentra el nombre
    }
}

// Paso 4: Mostrar el resultado
if (encontrado) {
    console.log("El nombre se encuentra en la lista.");
} else {
    console.log("El nombre no se encuentra en la lista.");
}
