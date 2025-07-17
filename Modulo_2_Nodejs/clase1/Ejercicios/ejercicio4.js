function contarVocales(texto) {
    let contador = 0; // Inicializamos un contador
    let vocales = "aeiouAEIOU"; // Cadena con todas las vocales

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++; // Incrementamos el contador si encontramos una vocal
        }
    }

    return contador; // Retornamos el número total de vocales
}

// Probamos la función
let texto = "Hola Mundo";
console.log(contarVocales(texto)); // Debe devolver 4
