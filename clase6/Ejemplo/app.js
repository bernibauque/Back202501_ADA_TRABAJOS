// Importamos el módulo 'readline' para trabajar con entradas y salidas interactivas.
const readline = require('readline');

// Cargamos las variables de entorno desde el archivo '.env' usando 'dotenv'.
require('dotenv').config();

// Establecemos un saludo predeterminado usando una variable de entorno.
// Si no se define en el archivo '.env', usamos 'Hola' como valor por defecto.
const defaultGreeting = process.env.GREETING || 'Hola';

// Procesamos los argumentos de línea de comandos (process.argv).
// Capturamos el primer argumento después del nombre del archivo como el nombre del usuario.
// Si no se proporciona un argumento, usamos 'Invitado' como valor predeterminado.
const args = process.argv.slice(2);
const userName = args[0] || 'Invitado';

// Mostramos el saludo personalizado y el nombre del usuario.
console.log(`${defaultGreeting}, ${userName}!`);

// Mostramos información sobre el entorno de ejecución:
console.log('Información sobre el entorno de ejecución:');
// Directorio actual desde donde se ejecuta el programa.
console.log(`- Directorio actual: ${process.cwd()}`);
// Plataforma del sistema operativo (win32, linux, darwin, etc.).
console.log(`- Plataforma: ${process.platform}`);

// Creamos una interfaz readline para interactuar con el usuario.
// 'input' se configura como el flujo de entrada estándar (teclado).
// 'output' se configura como el flujo de salida estándar (consola).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Usamos el método 'rl.question' para mostrar una pregunta al usuario.
// La pregunta se muestra en la consola, y la respuesta se procesa en el callback.
rl.question('¿Cuántos años tienes? ', (age) => {
    // Mostramos un mensaje con la edad del usuario.
    console.log(`¡Wow, ${age} años es una gran edad!`);
    // Cerramos la interfaz readline después de obtener la respuesta.
    rl.close();
});

// Manejamos el evento 'close' que se emite cuando se cierra la interfaz readline.
// Mostramos un mensaje de despedida y finalizamos el programa de forma ordenada.
rl.on('close', () => {
    console.log('Gracias por usar este programa. ¡Adiós!');
    // Usamos 'process.exit(0)' para indicar que el programa terminó con éxito.
    process.exit(0);
});
