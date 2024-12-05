// Última aparición de un modelo de auto
// En este ejercicio, trabajaremos con una lista de modelos de autos. 
// Implementa una función ultimaAparicionModeloAuto(modelo) que encuentre y 
// muestre la última posición en la lista donde aparece el modelo 
// específico de auto dado por modelo.
// Datos Iniciales:
//     Utiliza un array llamado modelosAutos que contenga varios modelos de autos,
//     algunos repetidos para demostrar la funcionalidad de lastIndexOf.
// Función Requerida:
//     Implementa ultimaAparicionModeloAuto(modelo), que toma modelo como parámetro
//     (un string) y utiliza el método lastIndexOf para encontrar la última posición
//     en modelosAutos donde modelo aparece.
//     Si modelo se encuentra en el array, imprime por consola la posición encontrada 
//     (índice + 1 para mostrar el número de posición).
//     Si modelo no está en el array, imprime un mensaje indicando que el modelo no está presente.


// Array de modelos de autos, algunos repetidos
const modelosAutos = ["Toyota", "Honda", "Ford", "Toyota", "Chevrolet", "Honda", "Ford"];

// Función que encuentra la última aparición de un modelo de auto
function ultimaAparicionModeloAuto(modelo) {
    let indiceUltimo = -1; // Variable que almacenará el índice de la última aparición

    // Recorremos el array desde el principio hasta el final
    for (let i = 0; i < modelosAutos.length; i++) {
        // Si encontramos el modelo, actualizamos el índice
        if (modelosAutos[i] === modelo) {
            indiceUltimo = i;
        }
    }

    // Verificamos si se encontró el modelo en el array
    if (indiceUltimo !== -1) {
        // Si el modelo se encuentra, mostramos la posición (índice + 1 para mostrar en formato 1 a N)
        console.log(`El modelo ${modelo} se encuentra en la posición ${indiceUltimo + 1}`);
    } else {
        // Si no se encuentra el modelo, mostramos un mensaje de error
        console.log(`El modelo ${modelo} no está presente en la lista.`);
    }
}

// Ejemplos de uso de la función:

ultimaAparicionModeloAuto("Toyota");  // El modelo Toyota se encuentra en la posición 4
ultimaAparicionModeloAuto("Honda");   // El modelo Honda se encuentra en la posición 6
ultimaAparicionModeloAuto("Chevrolet"); // El modelo Chevrolet se encuentra en la posición 5
ultimaAparicionModeloAuto("BMW"); // El modelo BMW no está presente en la lista.

