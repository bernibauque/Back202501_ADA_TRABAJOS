const path = require('path')

// Ejemplo 1: Obtener el directorio contenedor de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt'
const dirName1 = path.dirname(filePath)
console.log('Ejemplo 1 - Directorio contenedor de file.txt:', dirName1);

// Ejemplo 2: Obtener el directorio de un archivo usando ruta relativa
const relativePath = 'src/utils/helpers.js'
const dirName2 = path.dirname(relativePath)
console.log('Ejemplo 2 - Directorio contenedor de herlpers.js:', dirName2);

// Ejemplo 3: Obtener el directorio padre de un directorio
const dir = '/var/www/html/'
const dirName3 = path.dirname(dir)
console.log('Ejemplo 3 - Directorio padre de /var/www/html/: ', dirName3);
