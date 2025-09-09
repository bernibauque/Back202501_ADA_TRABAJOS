const likes = [45, 23, 67, 89, 34, 23, 78, 90, 12, 44, 55, 66, 77, 88, 99];

// Ordenar los likes de mayor a menor
const likesOrdenados = bubbleSort(likes.slice()).reverse();

console.log(`Mayor cantidad de likes: ${likesOrdenados[0]}`);
console.log(`Segundo mayor cantidad de likes: ${likesOrdenados[1]}`);
console.log(`Tercer mayor cantidad de likes: ${likesOrdenados[2]}`);
console.log(`Menor cantidad de likes: ${likesOrdenados[likesOrdenados.length - 1]}`);

// Función de bubble sort reutilizada del ejercicio 2
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
