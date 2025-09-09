// Ejercicio 8: Uso de Bucles y Arrays
// Escribe un programa que solicite al usuario ingresar 5 paises y
// los almacene en un array. Luego, imprime en consola todos los
// paises de manera alfabetica.
// Importante: Este ejercicio puede ser resulto con el método sort()
// Si desean investigar y utilizarlo es aceptable.

let paises = [];

// Paso 1: Solicitar 5 países y almacenarlos en el array
for (let i = 0; i < 5; i++) {
    let pais = prompt(`Ingrese el país ${i + 1}:`);
    paises[i] = pais;  // Asignación directa al array
}

// Paso 2: Ordenar el array alfabéticamente
paises.sort();

// Paso 3: Imprimir los países ordenados en la consola
console.log("Países en orden alfabético:");
for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

