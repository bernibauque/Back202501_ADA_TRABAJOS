// Ejemplo 1: Función normal
// Recibe un parametro num y devuelve el valor de ese número multiplicado por 2
function multiplicarPorDos(num) {
    return num * 2;
}
// Llamada a la función normal
console.log(multiplicarPorDos(5));  // 10

// Ejemplo 2: Función arrow
// Tiene una sintaxis mas compacta, pero hace lo mismo
const multiplicarPorDosArrow = (num) => {
    return num * 2;
};
// Llamada a la función arrow
console.log(multiplicarPorDosArrow(5));  // 10

// Ejemplo 3: Función arrow más simple (sin llaves y "return" implícito)
// Esta version usa una sintaxis aun más breve donde el return es implicito, 
// lo que significa que no necesitas escribir return o las llaves {} si 
// la función tiene una sola expresion
const multiplicarPorDosArrowSimple = (num) => num * 2;
// Llamada a la función arrow simple
console.log(multiplicarPorDosArrowSimple(5));  // 10
