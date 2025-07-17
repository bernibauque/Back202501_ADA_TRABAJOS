// Importar el módulo 'fs' para trabajar con el sistema de archivos.
const fs = require('fs');

// Definimos la ruta al archivo 'tareas.json' que almacenará las tareas.
const filePath = './tareas.json';

// Leemos los argumentos pasados desde la línea de comandos.
const args = process.argv.slice(2);
const comando = args[0]; // Primer argumento: el comando a ejecutar.
const descripcion = args.slice(1).join(' '); // El resto de los argumentos: la descripción de la tarea.

// Función para leer el archivo JSON y devolver las tareas.
const leerTareas = () => {
    const contenido = fs.readFileSync(filePath, 'utf-8'); // Leer el archivo 'tareas.json'.
    return JSON.parse(contenido); // Convertir el contenido JSON en un array de tareas.
};

// Función para escribir tareas en el archivo JSON.
const escribirTareas = (tareas) => {
    const json = JSON.stringify(tareas, null, 2); // Convertir el array de tareas en formato JSON.
    fs.writeFileSync(filePath, json, 'utf-8'); // Guardar el JSON en el archivo.
};

// Función para agregar una nueva tarea.
const agregarTarea = (descripcion) => {
    const tareas = leerTareas(); // Leer las tareas actuales.
    tareas.push({ id: tareas.length + 1, descripcion, completada: false }); // Agregar una nueva tarea.
    escribirTareas(tareas); // Guardar las tareas actualizadas.
    console.log('Tarea agregada:', descripcion);
};

// Función para listar todas las tareas.
const listarTareas = () => {
    const tareas = leerTareas(); // Leer las tareas actuales.
    console.log('Lista de tareas:');
    tareas.forEach((tarea) => {
        const estado = tarea.completada ? '✔️' : '❌'; // Mostrar si la tarea está completada.
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
    });
};

// Función para marcar una tarea como completada.
const completarTarea = (id) => {
    const tareas = leerTareas(); // Leer las tareas actuales.
    const tarea = tareas.find((t) => t.id === parseInt(id)); // Buscar la tarea por ID.
    if (tarea) {
        tarea.completada = true; // Marcar la tarea como completada.
        escribirTareas(tareas); // Guardar las tareas actualizadas.
        console.log('Tarea completada:', tarea.descripcion);
    } else {
        console.log('Tarea no encontrada.');
    }
};

// Manejo de los comandos.
if (comando === 'agregar') {
    agregarTarea(descripcion);
} else if (comando === 'listar') {
    listarTareas();
} else if (comando === 'completar') {
    completarTarea(descripcion);
} else {
    console.log('Comando no reconocido. Usa "agregar", "listar" o "completar".');
}
