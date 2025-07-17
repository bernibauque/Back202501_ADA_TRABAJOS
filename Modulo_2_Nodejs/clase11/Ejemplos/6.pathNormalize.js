const path = require('path')

// Ejemplo 1: Normalizacion de una ruta con barras redundantes y puntos de navegacion
const rawPath1 = '/home/user/docs/./file.txt'
const normilazePath1 = path.normalize(rawPath1)
console.log('Ejemplo 1 - Ruta normalizada:');
console.log(normilazePath1);

// Ejemplo 2: Normalizacion de una ruta con navegacion hacia arriba
const rawPath2 = '/home/user/docs/../images/file.jpg'
const normilazePath2 = path.normalize(rawPath2)
console.log('Ejemplo 2 - Ruta normalizada con navegacion hacia arriba:');
console.log(normilazePath2);

// Ejemplo 3: Normalizacion de una ruta con multiples puntos de navegacion
const rawPath3 = '/home/user/docs/../../file.txt'
const normilazePath3 = path.normalize(rawPath3)
console.log('Ejemplo 3 - Ruta normalizada con multiples puntos:');
console.log(normilazePath3);