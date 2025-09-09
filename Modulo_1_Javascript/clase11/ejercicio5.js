// Ejercicio 5: 
// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

const prompt = require('prompt-sync')();

function calcularValorHora() {
    let sueldoMensual = parseFloat(prompt("Ingresa tu sueldo mensual:"));
    const horasPorMes = 40;
    let valorHora = sueldoMensual / horasPorMes;
    return valorHora;
}

// Ejemplo de uso
let resultado5 = calcularValorHora();
console.log(`El valor de tu hora de trabajo es: ${resultado5}`);
