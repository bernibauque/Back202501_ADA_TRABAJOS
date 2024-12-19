let list = [12, 3, 5, 7, 1, 22, 47, 100];

// Función de bubble sort
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Ordenar la lista
const listaOrdenada = bubbleSort(list.slice());
console.log('Lista ordenada:', listaOrdenada);

// Preguntas
const numeros2 = [12, 5, 22, 100];
numeros2.forEach(num => {
    console.log(`La posición del número ${num} es: ${busquedaBinaria(listaOrdenada, num)}`);
});

// Función de búsqueda binaria
function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (array[medio] === objetivo) {
            return medio;
        } else if (array[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return -1;
}

