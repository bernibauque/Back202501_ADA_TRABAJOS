// 1. Declaracion de un array simple
let frutas : string[] = ["manzana", "banana", "frutilla"]

// 2. Agregamos un fruta
frutas.push('naranja')
console.log('Agregamos una fruta al final: ', frutas);

// 3. Eliminamos una fruta
let ultimafruta = frutas.pop()
console.log('Eliminamos la ultima fruta: ', ultimafruta);
console.log('Array con la fruta eliminada: ', frutas);

// 4. Combinamos todos los elementos
let cadenaFrutas = frutas.join(' - ')
console.log('combinamos todos los elementos del array: ', cadenaFrutas);
