// Metodos Array (Avanzados)

let notas = [10, 4, 5, 8, 9, 2, 7];

//1). MAP: Crea un nuevo array con los resultados de la funcion aplicada
// a cada elemento.
let notasHastaCien = notas.map(function (numero) {
    return numero * 10;
});
//console.log(notasHastaCien);

//2). FILTER: Crea un nuevo arreglo con los elementos que pasan la condicion
// especificada en una funcion de filtro
let notasAprobadas = notas.filter(function (numero) {
    return numero >= 7;
});
//console.log(notasAprobadas);

//3). REDUCE: Reduce a un valor unico un arreglo
let sumaNotas = notas.reduce(function (acumulador, numero) {
    return acumulador + numero;
});
//console.log(sumaNotas);

//4). FOREACH: Iterar sobre un array (no retorna nada)
notas.forEach(function (valor, indice) {
    //console.log("En la posicion: " + indice + " tengo el valor: " + valor);
});

//5). FIND: Encuentra el primer elemento en el array que cumple 
// con la condicion
let notaEncontrada = notas.find(function (numero) {
    return numero >= 8;
});
console.log("La primera nota mayor o igual a 8 es: " + notaEncontrada);


