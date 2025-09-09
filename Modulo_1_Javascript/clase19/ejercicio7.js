// Realizar una función que, dada una lista, devuelva una nueva lista 
// cuyo contenido sea igual a la original pero invertida.

const prompt = require('prompt-sync')();

function invertirLista() {
    // Solicitar al usuario que ingrese una lista de números separados por comas
    const lista = prompt("Ingrese una lista de números separados por comas: ").split(',').map(Number);

    // Crear una nueva lista para almacenar los elementos invertidos
    const listaInvertida = [];

    // Recorrer la lista original desde el final hacia el principio
    for (let i = lista.length - 1; i >= 0; i--) {
        // Añadir cada elemento a la nueva lista
        listaInvertida.push(lista[i]);
    }

    // Imprimir la lista invertida
    console.log(`Lista invertida: ${listaInvertida}`);
}

// Llamar a la función para ejecutar el código
invertirLista();
