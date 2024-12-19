// Creamos el objeto literal:
let estudiante = {
    nombre: "Carlos",
    edad: 20,
    notas: [8, 7, 9, 6, 10]
};

// Función:
function procesarEstudiante(estudiante) {

    // 1. Agregue una nueva nota al array de notas.
    estudiante.notas.push(7);

    // 2. Elimine la primera nota del array.
    estudiante.notas.shift();

    // 3. Calcule el promedio de las notas restantes.
    let suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    let promedio = suma / estudiante.notas.length;

    // 4. Convierta el nombre del estudiante a mayúsculas.
    let nombreMayusculas = estudiante.nombre.toUpperCase();

    // 5. Devuelva un objeto con el nombre en mayúsculas y el promedio de las notas.
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
}

// Llamada a la función y mostrar el resultado
let resultado = procesarEstudiante(estudiante);
console.log("Estudiante: ", resultado);






