// Definicion de una interfaz
interface Estudiante {
    nombre: string, // propiedad : tipo
    edad: number,
    materiaFavorita: string,
    promedio: number

    saludar: () => void // Metodo saludar (que no devuelve valor)
    obtenerDetalles: () => string // metodo que devuelve cadena de texto
}

// Creacion de un objeto que cumple con la interfaz 'Estudiante'
const miEstudiante : Estudiante = {
    nombre: 'Ana',
    edad: 21,
    materiaFavorita: 'Matematica',
    promedio: 9.5,

    saludar: function() {
        console.log(`Hola, soy ${miEstudiante.nombre}`);
    },

    obtenerDetalles: function() {
        return `Nombre: ${miEstudiante.nombre}, tengo ${miEstudiante.edad} 
        anios. Mi materia favorita es ${miEstudiante.materiaFavorita} 
        y mi promedio es: ${miEstudiante.promedio}`
    }
}

// Uso de los metodos:

miEstudiante.saludar()

const detalles = miEstudiante.obtenerDetalles()
console.log(detalles);


