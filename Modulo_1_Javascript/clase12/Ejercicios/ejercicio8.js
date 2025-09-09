// Ejercicio 8: Verificar origen del auto
// Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
// para verificar y mostrar si el auto es de
// origen nacional o importado. Considera que solo los autos de marcas 
//"Chevrolet", "Ford" y "Fiat" son de origen nacional.
// * Solicita al usuario que ingrese la marca de un auto.
// * Utiliza una función flecha para determinar si la marca ingresada corresponde a 
// un auto de origen nacional o importado.
// * Muestra un mensaje indicando si el auto es de origen nacional o importado, 
// basado en la marca ingresada por el usuario.

// EJERCICIO RESUELTO EN CLASES 

const prompt = require('prompt-sync')();

const verificarOrigenAuto = (marca) => {
    let origen;

    // Verificar origen del auto
    if (marca === 'Chevrolet' || marca === 'Ford' || marca === 'Fiat') {
        origen = `${marca} es de origen nacional`;
    } else {
        origen = `${marca} es de origen importado`;
    }
    return origen;
};

// Solicitar marca de auto al usuario
let marcaAuto = prompt("Ingrese la marca del auto (Primera letra MAY): ");

// llamar a la funcion y obtener resultado
let resultado = verificarOrigenAuto(marcaAuto);

console.log(resultado);







