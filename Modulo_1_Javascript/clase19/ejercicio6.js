// Crear una función que reciba un string y luego imprimir la
// cantidad de vocales que se encuentran en dicha frase.
const prompt = require('prompt-sync')();

function contarVocales() {
    // Solicitar al usuario que ingrese una frase y convertirla a minúsculas
    const frase = prompt("Ingrese una frase: ").toLowerCase();

    // Definir las vocales en un array
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Inicializar un contador para las vocales
    let contador = 0;

    // Iterar sobre cada carácter en la frase utilizando un bucle for tradicional
    for (let i = 0; i < frase.length; i++) {
        // Si el carácter es una vocal, incrementar el contador
        if (vocales.includes(frase[i])) {
            contador++;
        }
    }

    // Imprimir la cantidad de vocales encontradas en la frase
    console.log(`La frase contiene ${contador} vocales`);
}

// Llamar a la función para ejecutar el código
contarVocales();
