// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Leemos el archivo metas.json
fs.readFile('metas.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error al leer tu lista de metas:", err);
    } else {
        // Convertimos el contenido en una lista de objetos
        const metas = JSON.parse(data);

        // Filtramos las metas completas
        const metasCompletas = metas.filter(meta => meta.estado === "completa");

        // Mostramos las metas completas
        console.log("Metas completas: ✅", metasCompletas);
    }
});
