// 1. Función normal
// Concepto: Es una función tradicional en JavaScript, definida con la palabra clave "function". 
// Se puede utilizar para realizar tareas específicas o cálculos, como el área de un rectángulo.
function calcularAreaRectangulo(base, altura) {
    return base * altura; // Fórmula del área: base * altura
}
console.log("Área del rectángulo (base=10, altura=5):", calcularAreaRectangulo(10, 5)); // Llama a la función

// 2. Función declarada
// Concepto: Es similar a la función normal, pero destaca porque se "eleva" (hoisting) al inicio del archivo.
// Esto significa que puedes llamarla antes de su declaración en el código.
function esPar(numero) {
    if (numero % 2 === 0) {
        return "Es par"; // Si el número es divisible entre 2, es par
    } else {
        return "Es impar"; // Si no, es impar
    }
}
console.log("El número 7:", esPar(7)); // Llama a la función con un número impar
console.log("El número 8:", esPar(8)); // Llama a la función con un número par

// 3. Función expresada
// Concepto: Es una función anónima que se asigna a una variable. 
// No se puede llamar antes de su definición porque no está sujeta al hoisting.
const encontrarMayor = function (a, b) {
    if (a > b) {
        return a; // Devuelve 'a' si es mayor
    } else {
        return b; // Devuelve 'b' si es mayor o igual
    }
};
console.log("El mayor entre 15 y 25 es:", encontrarMayor(15, 25)); // Llama a la función
