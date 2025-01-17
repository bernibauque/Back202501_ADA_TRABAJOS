// importamos el modulo
const fs = require('fs')

// creamos un objeto que represente nuestro perfil
const perfil = {
    nombre: 'Berni',
    edad: 26,
    ciudadFavorita: 'Tucuman'
}

// convertimos el objeto en un formato json y escribimos el archivo
fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
    if (err) {
        console.error("Hubo un error al crear tu perfil: ", err)
    } else {
        console.log("Perfil creado exitosamente, Revisa el archivo 'perfil.json'");
    }
})