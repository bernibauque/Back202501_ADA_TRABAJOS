// Ejercicio 5: If Ternario
// Escribe un programa que lea una nota (entero entre 0 y 100) e 
// imprima el equivalente en letras siguiendo esta escala:
//  A si la nota está entre 90 y 100
//  B si la nota está entre 80 y 89
//  C si la nota está entre 70 y 79
//  D si la nota está entre 60 y 69
//  F si la nota está entre 0 y 59
// Utiliza operadores ternarios para determinar la calificación en 
// letras.

const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Introduce una nota (0-100):"));

let calificacion =
    (nota >= 90 && nota <= 100) ? "A" :
        (nota >= 80 && nota < 90) ? "B" :
            (nota >= 70 && nota < 80) ? "C" :
                (nota >= 60 && nota < 70) ? "D" :
                    (nota >= 0 && nota < 60) ? "F" : "Nota inválida";

console.log(`La calificación es: ${calificacion}`);


