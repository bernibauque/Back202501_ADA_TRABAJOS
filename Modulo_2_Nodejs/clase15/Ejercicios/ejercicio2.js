const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Ruta al archivo JSON
const rutaTareas = path.join(__dirname, 'tareas.json');

// Modelo: Representa una tarea
class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completada = false;
    }
}

// Controlador: Gestiona la lógica de la aplicación
class ControladorTareas {
    constructor() {
        this.tareas = this.cargarTareas();
    }

    cargarTareas() {
        try {
            const datos = fs.readFileSync(rutaTareas, 'utf-8');
            return JSON.parse(datos);
        } catch (error) {
            return [];
        }
    }

    guardarTareas() {
        fs.writeFileSync(rutaTareas, JSON.stringify(this.tareas, null, 2));
    }

    agregarTarea(descripcion) {
        const tarea = new Tarea(descripcion);
        this.tareas.push(tarea);
        this.guardarTareas();
        console.log('Tarea añadida:', descripcion);
    }

    listarTareas() {
        console.log('Tareas:');
        this.tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.descripcion} [${tarea.completada ? 'Completada' : 'Pendiente'}]`);
        });
    }
}

// Vista: Interacción con el usuario
const controlador = new ControladorTareas();

while (true) {
    const opcion = readline.question(
        '¿Qué deseas hacer? (1. Añadir tarea, 2. Listar tareas, 3. Salir): '
    );

    if (opcion === '1') {
        const descripcion = readline.question('Descripción de la tarea: ');
        controlador.agregarTarea(descripcion);
    } else if (opcion === '2') {
        controlador.listarTareas();
    } else if (opcion === '3') {
        break;
    } else {
        console.log('Opción no válida');
    }
}
