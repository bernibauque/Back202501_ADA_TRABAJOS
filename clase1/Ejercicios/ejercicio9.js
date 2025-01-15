function obtenerNumerosUnicos(numeros) {
    return [...new Set(numeros)]; // Eliminamos duplicados y convertimos a array
}

// Probamos la función
let numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(obtenerNumerosUnicos(numeros)); // Debe devolver [1, 2, 3, 4, 5]
