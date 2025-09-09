/*
Ejercicio 4: Escribí un programa que imprima los números pares del 0
al 100. No es necesario pedirle al usuario, solo imprimir el 
resultado
Pista: Usa un ciclo
*/

// Array para almacenar los números pares
let numerosPares = [];

// Bucle para recorrer del 0 al 100
for (let i = 0; i <= 100; i++) {
    // Verificar si el numero es par
    if (i % 2 === 0) {
        // Agregamos los numeros al array
        numerosPares[i / 2] = i;
    }
}

console.log("Números pares:", numerosPares);



