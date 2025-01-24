// Importamos el módulo readline.
const readline = require('readline');

// Creamos la interfaz para interactuar con el usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Preguntamos por el primer número.
rl.question('Introduce el primer número: ', (num1) => {
    // Preguntamos por el segundo número.
    rl.question('Introduce el segundo número: ', (num2) => {
        // Calculamos la suma.
        const suma = parseFloat(num1) + parseFloat(num2);

        // Mostramos el resultado.
        console.log(`La suma de ${num1} y ${num2} es: ${suma}`);

        // Cerramos la interfaz.
        rl.close();
    });
});

// Manejamos el evento de cierre para finalizar el programa.
rl.on('close', () => {
    console.log('¡Gracias por usar el programa!');
    process.exit(0);
});


