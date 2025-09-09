// 1). Inmutabilidad en Objetos:
// Para mantener la inmutabilidad en obj, se puede usar el operador de propagacion
// (...)
//Para crear copias superficiales del objeto original
let persona = {
    nombre: 'Kaira',
    edad: 27,
};
// crear una nueva copia del obj con un cambio
let personaNueva = { ...persona, edad: 31 };
//console.log(persona);
//console.log(personaNueva);

//2). Inmutabilidad en Arrays:
// Para Arrays se puede usar metodo concat, slice o op propagacion (...) para crear
// copias nuevas copias del array original
let numeros = [1, 2, 3, 4, 5];
// Copia con cambio:
let numerosNuevos = [...numeros, 6];
//console.log(numeros);
//console.log(numerosNuevos);

//3). Inmutabilidad en funciones
// En lugar de modificar una funcion existente, crearemos una nueva funcion con los
//cambios necesarios
// Funcion original
function saludar(nombre) {
    return `Hola ${nombre}!`;
}
//Modificar la funcion original (no inmutable)
function saludarFormal(nombre) {
    return `Buenos dias, ${nombre}.`;
}
console.log(saludar('Mariana'));
console.log(saludarFormal('Sofi'));
//Crear una nueva funcion con los cambios (inmutabilidad)
const saludarEnIngles = (nombre) => `Hello, ${nombre}!`;
console.log(saludarEnIngles('Evelia'));

