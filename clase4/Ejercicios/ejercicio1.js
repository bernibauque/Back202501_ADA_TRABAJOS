// Importamos el módulo fs para trabajar con archivos
const fs = require('fs');

// Creamos un objeto que representa nuestro perfil
const perfil = {
    nombre: "María",
    edad: 28,
    ciudadFavorita: "París"
};

// Convertimos el objeto en un formato JSON y escribimos el archivo
fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
    if (err) {
        // Si ocurre un error, lo mostramos en consola
        console.error("Hubo un error al crear tu perfil:", err);
    } else {
        // Mensaje de éxito
        console.log("¡Perfil creado exitosamente! 🎉 Revisa el archivo perfil.json.");
    }
});



