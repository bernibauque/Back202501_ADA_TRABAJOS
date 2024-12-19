// Definimos las constantes para el rango
const RANGO_MINIMO = 10; // Puedes cambiar este valor
const RANGO_MAXIMO = 20; // Puedes cambiar este valor

// Pedimos al usuario un número
let numero = parseFloat(prompt("Ingrese un número:"));

// Verificamos si el número está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango");
} else {
    console.log("El número está fuera del rango");
}
