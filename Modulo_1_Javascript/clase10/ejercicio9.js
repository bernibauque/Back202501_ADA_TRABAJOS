// Ejercicio 9:
// En este ejercicio tienes un array colores que contiene nombres de diferentes colores. Tu tarea es realizar las siguientes operaciones:
// 1. Imprimir todos los colores del array.
// 2. Modificar el primer color del array a "blanco".
// 3. Agregar dos nuevos colores al final del array: "negro" y "gris".

let colores = ["rojo", "verde", "azul", "amarillo"];

// Imprimir todos los colores del array
console.log("Colores originales:");
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

// Modificar el primer color a "blanco"
colores[0] = "blanco";

// Agregar dos nuevos colores al final del array
colores[colores.length] = "negro";
colores[colores.length] = "gris";

// Imprimir los colores modificados
console.log("\nColores modificados:");
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}


