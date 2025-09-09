// Metodos Array
// Dado el siguiente array:
let notas = [3, 5, 10, 9, 8, 8, 8];

//1). Push: Para agregar elementos a nuestros arrays
notas.push(1);
notas.push(2);
notas.push(4);

//2). Pop: Eliminar el ultimo elemento
//notas.pop();
let elUltimo = notas.pop();
console.log(elUltimo);

//3). Shift: Se elimina el primer elemento 
notas.shift();

//4). Unshift: Agrega un elemento al principio 
notas.unshift(1);
console.log(notas);

// Con este nuevo array veamos los demas metodos:
let notas2 = [3, 5, 8, 10, 9, 7, 8, 8];

//5). IndexOf: Preguntar la posicion en el array
let posicionOcho = notas2.indexOf(8);
console.log(posicionOcho);

//6). LastIndexOf: Preguntar la ult posicion en el array
let posicionOcho2 = notas2.lastIndexOf(8);
console.log(posicionOcho2);

// Importante: Cuando buscamos una posicion que no esta 
// devuelve -1
let posicionInexistente = notas2.lastIndexOf(2);
console.log(posicionInexistente);

//7). Join: Nos junta todo y lo separa con una , (por defecto)
//A). Sin nada en parametros devuelve con ,
let resultadoJuntado = notas2.join();
console.log(resultadoJuntado);
//B).  Con una coma y espacio
let resultadoJuntado2 = notas2.join(", ");
console.log(resultadoJuntado2);
//C).  Con * 
let resultadoJuntado3 = notas2.join("**");
console.log(resultadoJuntado3);

//8). Includes: Buscar el elemento y devuelve true o false
let animales = ['perro', 'gato', 'raton'];
// Me da true
console.log(animales.includes('perro'));
// Me da false
console.log(animales.includes('ave'));



