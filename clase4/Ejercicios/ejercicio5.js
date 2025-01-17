// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Verificamos si el archivo perfil.json existe
if (fs.existsSync('perfil.json')) {
    // Eliminamos el archivo
    fs.unlink('perfil.json', (err) => {
        if (err) {
            console.error("No se pudo eliminar tu perfil:", err);
        } else {
            console.log("¡Perfil eliminado exitosamente! ❌");
        }
    });
} else {
    console.log("El archivo perfil.json no existe, ¡nada que eliminar! 😊");
}

