// Importamos dotenv para leer variables de entorno.
require('dotenv').config();

// Importamos readline para la interacción.
const readline = require('readline');

// Obtenemos el mensaje inicial de las variables de entorno.
const startMessage = process.env.START_MESSAGE || 'Bienvenido al programa';

// Mostramos el saludo inicial.
console.log(startMessage);

// Creamos la interfaz readline.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Preguntamos por el nombre del usuario.
rl.question('¿Cómo te llamas? ', (name) => {
    console.log(`Adiós, ${name}. ¡Que tengas un excelente día!`);
    rl.close();
});

// Manejamos el cierre del programa.
rl.on('close', () => {
    process.exit(0);
});



