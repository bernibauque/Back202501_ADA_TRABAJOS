function encontrarNumeroFaltante(arr, n) {
    // Suma esperada de los números del 1 a n
    const sumaEsperada = (n * (n + 1)) / 2;

    // Suma actual de los números en la matriz
    const sumaActual = arr.reduce((a, b) => a + b, 0);

    // El número faltante es la diferencia entre la suma esperada y la suma actual
    return sumaEsperada - sumaActual;
}

// Ejemplo de uso
const matriz = [1, 2, 4, 5, 6]; // Falta el 3
const n = 6; // El valor máximo de la secuencia
console.log(encontrarNumeroFaltante(matriz, n)); // 3

//Explicacion
// La función encontrarNumeroFaltante toma un array arr de n-1 números
// enteros únicos y el valor máximo n de la secuencia. Primero, calcula
// la suma esperada de los números del 1 a n usando la fórmula de la suma
// de una serie aritmética (n * (n + 1)) / 2. Luego, calcula la suma actual
// de los elementos en el array usando el método reduce. Finalmente, encuentra
// el número faltante restando la suma actual de la suma esperada y devuelve
// el resultado. En el ejemplo de uso, dado el array [1, 2, 4, 5, 6] y n = 6,
// la función encuentra y devuelve el número faltante 3.