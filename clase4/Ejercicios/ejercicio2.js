// Importamos el módulo fs para leer archivos
const fs = require('fs');

// Leemos el archivo perfil.json
fs.readFile('perfil.json', 'utf-8', (err, data) => {
    if (err) {
        // Si ocurre un error al leer el archivo, lo mostramos
        console.error("No se pudo leer tu perfil:", err);
    } else {
        // Convertimos el contenido a un objeto y lo mostramos en consola
        const perfil = JSON.parse(data);
        console.log("¡Aquí está tu perfil! 🌟", perfil);
    }
});


