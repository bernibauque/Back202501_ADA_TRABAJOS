// Importar el array de estudiantes
const estudiantes = require('./estudiantes');

// Mostrar los nombres de todos los estudiantes
console.log('Lista de Estudiantes:');
estudiantes.forEach(est => console.log(`- ${est.nombre}`));

// Calcular el promedio de notas de un estudiante específico
const calcularPromedio = notas => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const nombreEstudiante = 'Ana'; // Cambia el nombre según el estudiante que quieras
const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
if (estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    console.log(`El promedio de ${nombreEstudiante} es: ${promedio.toFixed(2)}`);
} else {
    console.log(`Estudiante con nombre ${nombreEstudiante} no encontrado.`);
}

// Agregar un nuevo estudiante al array
estudiantes.push({ nombre: 'Carlos', edad: 23, curso: 'Biología', notas: [8, 7, 9] });

// Mostrar el array actualizado en formato JSON
console.log('Lista actualizada de estudiantes:');
console.log(JSON.stringify(estudiantes, null, 2));
