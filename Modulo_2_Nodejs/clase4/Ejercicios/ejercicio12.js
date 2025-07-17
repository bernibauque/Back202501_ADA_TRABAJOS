const fs = require('fs');

// Leer tareas del archivo
function leerTareas() {
    if (fs.existsSync('tareas.json')) {
        const data = fs.readFileSync('tareas.json', 'utf-8');
        return JSON.parse(data);
    }
    return [];
}

// Guardar tareas en el archivo
function guardarTareas(tareas) {
    fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
}

// Agregar una nueva tarea
function agregarTarea(nombre, descripcion) {
    const tareas = leerTareas();
    tareas.push({ nombre, descripcion, estado: "pendiente" });
    guardarTareas(tareas);
    console.log(`Tarea "${nombre}" agregada exitosamente. ✅`);
}

// Completar una tarea
function completarTarea(nombre) {
    const tareas = leerTareas();
    const tarea = tareas.find(t => t.nombre === nombre);

    if (tarea) {
        tarea.estado = "completa";
        guardarTareas(tareas);
        console.log(`Tarea "${nombre}" completada. ✅`);
    } else {
        console.log(`No se encontró la tarea "${nombre}". ❌`);
    }
}

// Listar tareas por estado
function listarTareasPorEstado() {
    const tareas = leerTareas();
    const pendientes = tareas.filter(t => t.estado === "pendiente");
    const completas = tareas.filter(t => t.estado === "completa");

    console.log("Tareas pendientes: 🕒");
    console.table(pendientes);

    console.log("Tareas completas: ✅");
    console.table(completas);
}

// Pruebas
agregarTarea("Estudiar Node.js", "Repasar el módulo fs");
agregarTarea("Hacer ejercicio", "Caminar 30 minutos");
completarTarea("Estudiar Node.js");
listarTareasPorEstado();
