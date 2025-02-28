const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Ruta a la carpeta de notas
const carpetaNotas = path.join(__dirname, 'notas');

// Crear carpeta si no existe
if (!fs.existsSync(carpetaNotas)) {
    fs.mkdirSync(carpetaNotas);
}

// Función para crear una nota
function crearNota(titulo, contenido) {
    const rutaNota = path.join(carpetaNotas, `${titulo}.txt`);
    fs.writeFileSync(rutaNota, contenido);
    console.log('Nota creada:', titulo);
}

// Función para leer una nota
function leerNota(titulo) {
    const rutaNota = path.join(carpetaNotas, `${titulo}.txt`);
    if (fs.existsSync(rutaNota)) {
        const contenido = fs.readFileSync(rutaNota, 'utf-8');
        console.log(`Contenido de "${titulo}":\n${contenido}`);
    } else {
        console.log('La nota no existe.');
    }
}

// Menú interactivo
while (true) {
    const opcion = readline.question(
        '¿Qué deseas hacer? (1. Crear nota, 2. Leer nota, 3. Salir): '
    );

    if (opcion === '1') {
        const titulo = readline.question('Título de la nota: ');
        const contenido = readline.question('Contenido de la nota: ');
        crearNota(titulo, contenido);
    } else if (opcion === '2') {
        const titulo = readline.question('Título de la nota a leer: ');
        leerNota(titulo);
    } else if (opcion === '3') {
        break;
    } else {
        console.log('Opción no válida');
    }
}
