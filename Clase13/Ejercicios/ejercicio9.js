function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i); // Variable local en el bucle
    }
}
contarHasta(5); // Imprime: 1, 2, 3, 4, 5

