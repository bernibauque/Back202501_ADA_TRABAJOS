// importaciones 
const fs = require('fs')
const filePath = './data/task.json'

// funcion para leer las tareas desde el archivo json
function readTasks() {
    const data = fs.readFileSync(filePath) //leemos el archivo de forma sincrona
    return JSON.parse(data) // convertimos el contenido del archivo a un obj js
}

// funcion para guardar las tareas en el archivo json
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2)) //convertimos las tareas a json y las escribimos en el archivo
}

module.exports = { readTasks, saveTasks }