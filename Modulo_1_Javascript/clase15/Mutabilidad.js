// 1). Mutabilidad en Objetos 
let persona = {
    nombre: 'Berni',
    edad: 26
};
//Cambiar una propiedad de mi objeto
persona.edad = 31;
//console.log(persona); // Imprime { nombre: 'Berni', edad: 31 }
//Agregar una nueva propiedad
persona.direccion = 'Calle Falsa 123';
console.log(persona);

// 2). Mutabilidad en Arrays
let numeros = [1, 2, 3, 4, 5];
//Cambiar el elemento del array
numeros[0] = 10;
//console.log(numeros);
//Agregar un nuevo elemento al array
numeros.push(6);
//console.log(numeros);

//3). Mutabilidad en Funciones
let saludar = function (nombre) {
    console.log(`Hola, ${nombre}!`);
};
saludar('Berni');
// Reasignacion de la funcion para cambiar su comportamiento
saludar = function (nombre) {
    console.log(`Hola ${nombre}. Como estas?`);
}
saludar('Mariana');

