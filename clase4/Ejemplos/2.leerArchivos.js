// PASO 1: Importamos el modulo
const fs = require('fs')

// PASO 2: Usamos el metodo reafile
// 1 Argumento: Archivo a leer. Si el archivo no esta en el mismo directorio, colocar la ruta
// 2 Argumento: La codificacion, utf-8 (unicode transformation format 8bits) y es una codificacion de caracteres que se utilizan para presentar texto en computadoras y en la web
// 3 Argumento - Callback: 
// A. Paramatro 1 err: Un objeto de error que indica si algo salio mal durante la lectura del archivo
// B. Parametro 2 data: contiene el contenido del archivo leido si no hubo error
fs.readFile('archivo.txt', 'utf-8', function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        throw err
    }
})