// Pedimos un número del 1 al 7
let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7:"));

// Definimos los días de la semana
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Verificamos si el número es válido y mostramos el día correspondiente
if (numeroDia >= 1 && numeroDia <= 7) {
    console.log(`El día correspondiente es: ${dias[numeroDia - 1]}`);
} else {
    console.log("Número fuera de rango. Por favor ingrese un número del 1 al 7.");
}
