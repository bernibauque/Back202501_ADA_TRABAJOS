function esPar(numero) {
    let resultado; // Variable local
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    return resultado;
}
console.log(esPar(4)); // Resultado esperado: "Es par"
console.log(esPar(7)); // Resultado esperado: "Es impar"

