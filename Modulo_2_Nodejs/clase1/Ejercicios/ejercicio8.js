function contarLetra(texto, letra) {
    let contador = 0; // Inicializamos el contador
    letra = letra.toLowerCase(); // Convertimos la letra a minúscula

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra) {
            contador++; // Incrementamos si encontramos la letra
        }
    }

    return contador; // Retornamos el número de veces que aparece la letra
}

// Probamos la función
let texto = "Programar es divertido";
console.log(contarLetra(texto, "r")); // Debe devolver 3
