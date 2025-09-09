// Ejercicio 1: Iguales a 10 pero menores de 1000
// Dada una matriz, recorrer sus valores y sumar solo los números 
// que estén por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

// Inicializamos la suma en 0
let suma = 0;

// Recorremos cada fila de la matriz
for (let i = 0; i < matriz.length; i++) {
    // Recorremos cada valor en la fila actual
    for (let j = 0; j < matriz[i].length; j++) {
        // Obtenemos el valor actual
        let valor = matriz[i][j];
        // Verificamos si el valor cumple con la condición
        if (valor >= 10 && valor < 1000) {
            // Sumamos el valor a la suma total
            suma += valor;
        }
    }
}

// Mostramos el resultado
console.log("La suma de los valores es:", suma);
