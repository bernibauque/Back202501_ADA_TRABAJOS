const prompt = require('prompt-sync')();

// Paso 1: Inicializa un array vacío para almacenar las flores favoritas
let floresFavoritas = [];

// Paso 2: Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrégalas manualmente
let flor1 = prompt("¿Cuál es tu primera flor favorita?");
floresFavoritas[0] = flor1;

let flor2 = prompt("¿Cuál es tu segunda flor favorita?");
floresFavoritas[1] = flor2;

let flor3 = prompt("¿Cuál es tu tercera flor favorita?");
floresFavoritas[2] = flor3;

// Paso 3: Pregunta al usuario por una flor específica
let florEspecifica = prompt("¿Qué flor quieres verificar?");

// Paso 4: Verifica manualmente si la flor específica está entre las favoritas
let contador = 0; // Contador para las menciones

// Recorremos el array para contar cuántas veces aparece la florEspecifica
for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florEspecifica) {
        contador++;
    }
}

// Muestra por consola cuántas veces se mencionó la flor
if (contador > 0) {
    console.log(`La flor "${florEspecifica}" se mencionó ${contador} vez(s).`);
} else {
    console.log(`La flor "${florEspecifica}" no está entre tus flores favoritas.`);
}
