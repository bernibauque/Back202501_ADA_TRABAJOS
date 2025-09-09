// Ejercicio 2: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de 
// puros numeros enteros y positivos. Luego, escribe un algoritmo 
// para sumar todos los numeros en la matriz.

// Declaramos una matriz de 5x5 con números enteros y positivos
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

// Inicializamos la variable para la suma en 0
let suma = 0;

// Recorremos la matriz para sumar todos los números
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

// Mostramos la suma total
console.log("La suma de todos los números en la matriz es:", suma);
