// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Creamos una lista vacía de metas
let metas = [];

// Agregamos metas a la lista
metas.push("Aprender Node.js");
metas.push("Viajar a Japón");

// Escribimos la lista en el archivo metas.json
fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
    if (err) {
        console.error("Error al crear tu lista de metas:", err);
    } else {
        console.log("¡Lista de metas creada con éxito! 🎯 Revisa metas.json.");
    }
});

