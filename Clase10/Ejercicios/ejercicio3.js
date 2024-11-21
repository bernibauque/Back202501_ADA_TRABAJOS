const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edad = parseInt(prompt("Ingresa tu edad: "));  // Convertimos el valor ingresado a número entero.

if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Tu edad está dentro del rango permitido.");
} else {
    console.log("Tu edad está fuera del rango permitido.");
}
