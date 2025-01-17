// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Copiamos el archivo metas.json en respaldo_metas.json
fs.copyFile('metas.json', 'respaldo_metas.json', (err) => {
    if (err) {
        console.error("Error al crear el respaldo:", err);
    } else {
        console.log("¡Respaldo creado exitosamente! 💾 Revisa respaldo_metas.json.");
    }
});

