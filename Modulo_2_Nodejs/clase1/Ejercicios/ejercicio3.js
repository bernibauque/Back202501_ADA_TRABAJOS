function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b); // Ordenamos de menor a mayor
}

// Probamos la función
let numeros = [5, 2, 9, 1, 7];
console.log(ordenarNumeros(numeros)); // Debe devolver [1, 2, 5, 7, 9]
