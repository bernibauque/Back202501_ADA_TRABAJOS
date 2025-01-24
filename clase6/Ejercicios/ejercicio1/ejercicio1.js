// Importamos dotenv para manejar las variables de entorno.
require('dotenv').config();

// Obtenemos el saludo desde las variables de entorno o usamos "Hola" por defecto.
const greeting = process.env.GREETING || 'Hola';

// Obtenemos el nombre del usuario desde los argumentos de línea de comandos.
// Si no hay argumentos, usamos "Invitado" como predeterminado.
const name = process.argv[2] || 'Invitado';

// Mostramos el saludo personalizado.
console.log(`${greeting}, ${name}!`);




