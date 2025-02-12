const path = require('path')

// Ejemplo 1: Uniendo segmentos de rutas simples
// Unimos ters segmentos de ruta:
const ejemplo1 = path.join('/user', 'local', 'bin')
console.log('Ejemplo 1 - Ruta combinada: ', ejemplo1);

// Ejemplo 2: Eliminar barras redundantes
const ejemplo2 = path.join('/user/', '/local/', 'bin/')
console.log('Ejemplo 2 - Rutas normalizadas sin barras redundantes: ', ejemplo2);

// Ejemplo 3: Normalizamos rutas con '..' (subir de directorio)
// Este ejemplo muestra como path.join maneja el segmento especial
// '..' que indica 'subir de directorio' 
// '/user' + 'local' sube un nivel con '..' y llega a 'bin'
// resultado: \user\bin
const ejemplo3 = path.join('/user', 'local', '..', 'bin')
console.log('Ejemplo 3 - Rutas normalizadas con ".." :', ejemplo3);

// Ejemplo 4 Construccion ruta relativa multiplataforma
// creamo una ruta relativa que funcione en cualquier so
// En unix el resultado sera con la barra: /
// En windows el resultado tendra las barras: \
// path.join garantiza que se usen las barras segun el so vigente
const ejemplo4 = path.join('docs', 'projects', 'index.html')
console.log('Ejemplo 4 - Rutas relativa:', ejemplo4);
