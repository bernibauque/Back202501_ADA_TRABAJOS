// Ejercicio 4
// Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta 
// un número X (inclusive). Para esto, debes seguir los siguientes pasos:
//1.	Solicitar al usuario que ingrese un número X.
//2.	Inicializar una variable para contar los números impares.
//3.	Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
//4.	Dentro del ciclo, verificar si el número es impar.
//5.	Si el número es impar, incrementar el contador de números impares.
//6.	Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
//7.	Utiliza el operador módulo (%) para verificar si un número es impar.

const prompt = require('prompt-sync')();

let x = parseInt(prompt("Ingresa un número: "));
let contadorImpares = 0;

for (let i = 0; i <= x; i++) {
    if (i % 2 !== 0) {
        contadorImpares++;
    }
}

console.log("La cantidad de números impares desde 0 hasta " + x + " (inclusive) es: " + contadorImpares);

