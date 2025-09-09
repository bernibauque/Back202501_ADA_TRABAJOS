// Programa un código que se comporte como un loro.
// Sí, todo lo que "oye", ¡lo repite!
// El programa debe recibir como entrada un texto y
// repetirlo 5 veces por consola utilizando un ciclo for.

const prompt = require('prompt-sync')();

let texto = prompt('Ingresa el texto que queramos que el loro repita: ');

for (let i = 0; i < 5; i++) {
    console.log(texto);
}