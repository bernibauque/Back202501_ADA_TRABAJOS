// Ejercicio 4
// Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato 
// que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

// Declaración de variables
let verdadero = true; // Tipo booleano
let texto = "¡Hola, mundo!"; // Tipo string
let numero = 42; // Tipo numérico
let nada = null; // Ausencia de valor

// Operaciones y validaciones
let resultadoSuma = numero + 8;
console.log("Resultado de la suma:", resultadoSuma);

let mensajeConcatenado = texto + " ¡Bienvenido!";
console.log("Mensaje concatenado:", mensajeConcatenado);

if (verdadero) {
    console.log("La variable verdadero es verdadera.");
} else {
    console.log("La variable verdadero es falsa.");
}

if (nada === null) {
    console.log("La variable nada está vacía (null).");
} else {
    console.log("La variable nada no está vacía.");
}
