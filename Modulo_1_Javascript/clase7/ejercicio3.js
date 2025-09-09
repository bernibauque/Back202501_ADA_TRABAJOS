// Ejercicio 3 - Constantes: 
// Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
// Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes.
// Ahora, debemos crear una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignaremos valores
// numéricos 18 y 99 respectivamente.
// Pista: Las constantes se declaran con la palabra reservada "const" y es buena práctica que sus nombres sean declarados 
// siempre con letras mayúsculas.

const prompt = require("prompt-sync")();

// Declaración de constantes
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Pedir al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad: "));

// Validar si la edad está dentro del rango permitido
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Su edad está dentro del rango permitido.");
} else {
    console.log("Su edad no está dentro del rango permitido.");
}

