const calcularFactorial = function (numero) {
    let factorial = 1; // Variable local
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
};
console.log(calcularFactorial(5)); // Resultado esperado: 120

