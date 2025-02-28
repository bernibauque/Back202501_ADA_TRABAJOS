// importamos el modulo y la vista
const taskModel = require('../models/taskModel')
const taskView = require('../views/taskView')

// funcion para mostrar tareas
function showTasks() {
    const tasks = taskModel.readTasks() // leemos las tareas desde el modelo
    taskView.displayTasks(tasks) // mostramos las tareas usando la vista
}

// funcion para agregar una tarea
function addTask() {
    const taskDescription = taskView.promptForTask() // pedimos al usuario que ingrese la descripcion de la tarea
    const tasks = taskModel.readTasks() // leemos las tareas actuales
    tasks.push({ description: taskDescription, completed: false }) //agregamos la nueva tarea a la lista
    taskModel.saveTasks(tasks) // guardamos las tareas actualizadas en el json
    taskView.confirmationMessage('Tarea agregada') // mostramos un msj de confirmacion
}

// funcion para eliminar una tarea
function removeTask() {
    const tasks = taskModel.readTasks() // leemos las tareas
    if (tasks.length === 0) {
        taskView.addTask('No hay tareas para eliminar')
        return;
    }
    const taskId = taskView.promptForTaskId(tasks) //pedimos al usuario que elija una tarea para eliminar
    tasks.splice(taskId, 1) //eliminamos la tarea seleccionada
    taskModel.saveTasks(tasks)  // guardamos las tareas actualizadas en el json
    taskView.confirmationMessage('Tarea eliminada') // mostramos un msj de confirmacion
}

//exportacion de las funciones
module.exports = { showTasks, addTask, removeTask }