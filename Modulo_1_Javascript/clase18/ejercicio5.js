// Creación del array de frases
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

// Función para manipular el array de frases
function procesarFrases(frases) {
    // Procesar cada frase
    let frasesModificadas = frases.map(frase => {
        // Convertir la frase a minúsculas
        let fraseMinusculas = frase.toLowerCase();

        // Dividir la frase en palabras
        let palabras = fraseMinusculas.split(" ");

        // Reemplazar las palabras "malo" por "bueno"
        palabras = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);

        // Combinar las palabras en una nueva cadena separada por espacios
        let fraseModificada = palabras.join(" ");

        return fraseModificada;
    });

    // Devolver el nuevo array con las frases modificadas
    return frasesModificadas;
}

// Llamada a la función y mostrar el resultado
let resultado = procesarFrases(frases);
console.log("Frases modificadas:", resultado);
