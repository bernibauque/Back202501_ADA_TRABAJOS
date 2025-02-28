// importamos el modulo readline-sync
const readlineSync = require('readline-sync')

const deseaContinuar = readlineSync.keyInYN('Deseas continuar?')

if (deseaContinuar) {
    console.log('Continuando con la operacion');
} else {
    console.log('Operacion cancelada por el usuario');
}