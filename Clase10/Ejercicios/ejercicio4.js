// Declaración de Variables
let verdadero = true; // Tipo booleano
let texto = "Este es un mensaje de ejemplo"; // Tipo string
let numero = 42; // Tipo numérico
let nada = null; // Representación de ausencia de valor

// Operaciones y Validaciones

// 1. Operación matemática usando la variable 'numero'
let suma = numero + 8; // Suma 8 al valor de la variable 'numero'
console.log("Resultado de la suma:", suma);

// 2. Concatenación del string de la variable 'texto' con otro mensaje adicional
let mensajeCompleto = texto + " y este es el texto adicional.";
console.log("Mensaje completo:", mensajeCompleto);

// 3. Verificación de si la variable 'verdadero' es true o false
if (verdadero) {
    console.log("La variable 'verdadero' es true.");
} else {
    console.log("La variable 'verdadero' es false.");
}

// 4. Condición para verificar si la variable 'nada' es null
if (nada === null) {
    console.log("La variable 'nada' es null.");
} else {
    console.log("La variable 'nada' no es null.");
}
