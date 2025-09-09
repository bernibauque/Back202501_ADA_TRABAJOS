// Crear una función que muestre todos los números de la secuencia de Fibonacci 
// hasta el valor ingresado por parámetro.

// La secuencia de Fibonacci es una serie de números en la cual cada número es la suma 
// de los dos números anteriores, comenzando con 0 y 1. La secuencia se ve así:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const prompt = require('prompt-sync')();

function mostrarFibonacci() {
    // Solicitar al usuario que ingrese el límite para la secuencia de Fibonacci
    const limite = parseInt(prompt("Ingrese el límite para la secuencia de Fibonacci: "), 10);
    // El 10 al final de la función parseInt es el parámetro que especifica la base numérica 
    // (o "radix") que se debe utilizar para convertir el string en un número entero. 
    // En este caso, 10 indica que el string debe ser interpretado como un número decimal (base 10).

    // Inicializar los dos primeros números de la secuencia
    let a = 0;
    let b = 1;

    // Imprimir los dos primeros números de la secuencia
    console.log(a); // Imprimir 0
    console.log(b); // Imprimir 1

    // Variable para almacenar el siguiente número en la secuencia
    let siguiente;

    // Calcular y mostrar la secuencia de Fibonacci hasta el límite
    while (b <= limite) {
        siguiente = a + b; // Calcular el siguiente número en la secuencia
        console.log(siguiente); // Imprimir el siguiente número
        a = b; // Actualizar 'a' con el valor de 'b'
        b = siguiente; // Actualizar 'b' con el valor de 'siguiente'
    }
}

// Llamar a la función para ejecutar el código
mostrarFibonacci();

