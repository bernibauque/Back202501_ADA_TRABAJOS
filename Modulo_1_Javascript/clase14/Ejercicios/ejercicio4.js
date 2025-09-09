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


// Datos iniciales
let modelosAutos = ["Civic", "Accord", "Civic", "Fit", "CR-V", "Accord"];

// Función para encontrar la última aparición de un modelo de auto
function ultimaAparicionModeloAuto(modelo) {
    let ultimoIndice = modelosAutos.lastIndexOf(modelo);

    if (ultimoIndice !== -1) {
        console.log(`La última aparición del modelo ${modelo} está en la posición: ${ultimoIndice + 1}`);
    } else {
        console.log(`El modelo ${modelo} no está presente en la lista de autos.`);
    }
}

// Ejemplos de uso
ultimaAparicionModeloAuto("Civic");
ultimaAparicionModeloAuto("Accord");
ultimaAparicionModeloAuto("Fit");
ultimaAparicionModeloAuto("Pilot"); // Modelo que no está en la lista


