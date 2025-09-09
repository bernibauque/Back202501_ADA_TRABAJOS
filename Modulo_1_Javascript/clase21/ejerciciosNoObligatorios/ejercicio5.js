let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];

// Función de bubble sort modificada para objetos
function bubbleSort(array, key) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j][key] > array[j + 1][key]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Ordenar por estatura (ascendente)
const personasOrdenadas = bubbleSort(personas.slice(), 'estatura');
console.log('Personas ordenadas por estatura:', personasOrdenadas);
