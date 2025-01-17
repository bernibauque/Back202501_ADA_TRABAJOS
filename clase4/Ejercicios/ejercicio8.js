// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Leemos el archivo metas.json
fs.readFile('metas.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error al leer tu lista de metas:", err);
    } else {
        // Convertimos el contenido en una lista
        const metas = JSON.parse(data);

        // Mostramos la cantidad de metas en consola
        console.log(`Tienes ${metas.length} metas en tu lista. 🌟`);
    }
});

