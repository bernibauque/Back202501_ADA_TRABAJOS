function filtrarPalabrasLargas(palabras, longitud) {
    return palabras.filter(palabra => palabra.length > longitud);
}

// Probamos la función
let palabras = ["javascript", "html", "css", "nodejs"];
console.log(filtrarPalabrasLargas(palabras, 4)); // Debe devolver ["javascript", "nodejs"]
