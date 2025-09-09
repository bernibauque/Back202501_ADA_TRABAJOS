function imprimirFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Llamada a la función
imprimirFizzBuzz();

// Explicacion
// La función imprimirFizzBuzz recorre los números del 1 al 100
// usando un bucle for, y para cada número i, primero verifica
// si es múltiplo de tanto 3 como 5 (i % 3 === 0 && i % 5 === 0) y,
// de ser así, imprime "FizzBuzz". Si no, verifica si es múltiplo
// solo de 3 (i % 3 === 0) e imprime "Fizz", o si es múltiplo solo
// de 5 (i % 5 === 0) e imprime "Buzz". Si el número no cumple
// ninguna de estas condiciones, imprime el número i. Al final,
// llamamos a la función imprimirFizzBuzz para ejecutar el código.