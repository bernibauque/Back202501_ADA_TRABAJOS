const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
const numerosPares = [];
const numerosImpares = [];

masNumeros.forEach((numero) => {
    if (numero % 2 === 0) {
        // Si el número es par
        numerosPares.push(numero);
    } else {
        // Si el número es impar
        numerosImpares.push(numero);
    }
});

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);



