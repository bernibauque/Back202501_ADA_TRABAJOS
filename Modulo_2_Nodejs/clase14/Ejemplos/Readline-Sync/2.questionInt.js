// importamos el modulo readline-sync
const readlineSync = require('readline-sync')

// pedimos edad al usuario y si no la pasa (numero entero)
// sigue solicitando
const edad = readlineSync.questionInt('Por favor, ingresa tu edad: ')

if (edad >= 18, 5) {
    console.log('Eres mayor de edad y puedes entrar al club');
} else {
    console.log('Lo siento no podes ingresar');
}