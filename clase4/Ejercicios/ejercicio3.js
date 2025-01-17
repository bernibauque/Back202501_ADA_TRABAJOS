// Importamos el módulo fs para trabajar con archivos
const fs = require('fs');

// Leemos el archivo perfil.json
fs.readFile('perfil.json', 'utf-8', (err, data) => {
    if (err) {
        // Si ocurre un error al leer el archivo, lo mostramos
        console.error("No se pudo leer el archivo para actualizar:", err);
    } else {
        // Convertimos el contenido en un objeto
        const perfil = JSON.parse(data);

        // Agregamos un nuevo atributo
        perfil.hobby = "Pintura";

        // Guardamos el objeto actualizado en el archivo
        fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
            if (err) {
                console.error("No se pudo actualizar tu perfil:", err);
            } else {
                console.log("¡Perfil actualizado con tu nuevo hobby! 🎨");
            }
        });
    }
});

