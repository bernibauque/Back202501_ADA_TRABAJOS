let notas = [10, 4, 5, 8, 9, 2, 7]

// 1. Metodo MAP: Crea un nuevo array con los resultados
// de la funcion aplicada a cada elemento
let notasHastaCien = notas.map(function (numero) {
    return numero * 10;
})
//console.log(`Ejemplo de MAP: ${notasHastaCien}`);

// 2. Metodo FILTER: Crea un nuevo arreglo con los
// elementos que pasan la condicion especificada en 
// la funcion
let notasAprobadas = notas.filter(function (numero) {
    return numero >= 7;
})
//console.log(`Ejemplo de FILTER: ${notasAprobadas}`);

// 3. Metodo REDUCE: Reduce a un valor unico un array/arreglo
let sumaNotas = notas.reduce(function (acumulador, numero) {
    return acumulador + numero;
})
//console.log(`Ejemplo de REDUCE: ${sumaNotas}`);

// 4. Metodo FOREACH: Iterar sobre un array (no retorna nada)
notas.forEach(function (valor, indice) {
    console.log("En la posicion: " + indice + " tengo el valor: " + valor);
})

//5. Metodo FIND: Encuentra el primer eleneto en el
// array que cumple con la condicion
let notasEncontradas = notas.find(function (numero) {
    return numero >= 8
})
//console.log("La primera nota mayor o igual a 8 es: " + notasEncontradas);
