function invertirPalabras(frase) {
    return frase.split(" ").reverse().join(" "); // Separamos, invertimos y unimos
}

// Probamos la función
let frase = "Aprender a programar es divertido";
console.log(invertirPalabras(frase)); // Debe devolver "divertido es programar a Aprender"
