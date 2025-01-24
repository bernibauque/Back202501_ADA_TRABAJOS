// Importamos dotenv para manejar las variables de entorno.
require('dotenv').config();

// Importamos el módulo readline para interacción con el usuario.
const readline = require('readline');

// Obtenemos el mensaje de bienvenida desde las variables de entorno.
const welcomeMessage = process.env.WELCOME_MESSAGE || '¡Bienvenido al conversor de temperaturas!';

// Mostramos el mensaje de bienvenida.
console.log(welcomeMessage);

// Creamos la interfaz readline.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Preguntamos al usuario por la temperatura en grados Celsius.
rl.question('Introduce una temperatura en grados Celsius: ', (celsius) => {
    // Convertimos la temperatura a Fahrenheit.
    const fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;

    // Mostramos el resultado de la conversión.
    console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F.`);

    // Cerramos la interfaz readline.
    rl.close();
});

// Manejamos el cierre del programa.
rl.on('close', () => {
    console.log('¡Gracias por usar el conversor de temperaturas! Hasta la próxima.');
    process.exit(0);
});


