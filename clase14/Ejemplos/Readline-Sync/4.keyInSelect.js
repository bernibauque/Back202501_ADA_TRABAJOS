// importamos el modulo readline-sync
const readlineSync = require('readline-sync')

const lenguajes = ['javascript', 'python', 'java', 'c++']

const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, 'Cual es tu lenguaje de programacion?')

if (indiceSeleccionado === -1) {
    console.log('No has seleccionado ningun lenguaje');
} else {
    console.log(`Has seleccionado ${lenguajes[indiceSeleccionado]}`);
}