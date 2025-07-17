const path = require('path')

// Ejemplo 1: Verificacion de una ruta absoluta en unix
const absolutePath1 = '/home/user/docs/file.txt'
const isAbsolute1 = path.isAbsolute(absolutePath1)
console.log('Ejemplo 1 - Es una ruta absoluta? (U):');
console.log(isAbsolute1);

// Ejemplo 2: Verificacion de una ruta absoluta en windows
const absolutePath2 = 'c:\\Users\\SantiagoFelipelli\\Documents\\file.txt'
const isAbsolute2 = path.isAbsolute(absolutePath2)
console.log('Ejemplo 2 - Es una ruta absoluta? (W):');
console.log(isAbsolute2);

