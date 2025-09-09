// Ejercicio 3: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505 - Verde 505

function generarMatriz10x10() {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < 10; i++) {
        let fila = [];
        for (let j = 0; j < 10; j++) {
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
    }

    return matriz;
}

function sumarDiagonalPrincipal(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }

    return suma;
}

function sumarDiagonalSecundaria(matriz) {
    let suma = 0;
    let n = matriz.length;

    for (let i = 0; i < n; i++) {
        suma += matriz[i][n - 1 - i];
    }

    return suma;
}

// Generar la matriz de 10x10
let matriz10x10 = generarMatriz10x10();

// Sumar los valores de la diagonal principal
let sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz10x10);
console.log("Suma de la diagonal principal (roja):", sumaDiagonalPrincipal);

// Sumar los valores de la diagonal secundaria
let sumaDiagonalSecundaria = sumarDiagonalSecundaria(matriz10x10);
console.log("Suma de la diagonal secundaria (verde):", sumaDiagonalSecundaria);
