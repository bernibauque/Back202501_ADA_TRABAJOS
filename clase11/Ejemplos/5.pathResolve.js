const path = require('path')

// Ejemplo 1: Resolucion de una ruta relativa desde el directorio actual
const resolvePath1 = path.resolve('file.txt')
console.log('Ejemplo 1 - Ruta relativa desde el directorio actual:', resolvePath1);

// Ejemplo 2: Resolucion de multiples segmentos de ruta en una ruta absoluta
const resolvePath2 = path.resolve('/home/user', 'docs', 'file.txt')
console.log('Ejemplo 2 - Ruta resuelta con multiples segmentos:', resolvePath2);

// Ejemplo 3: Uso con rutas relativas que suben varios niveles
const resolvePath3 = path.resolve('/home/user/docs', '/..images', 'file.jpg')
console.log('Ejemplo 3 - Ruta resuleta con navegacion hacia arriba:', resolvePath3);

