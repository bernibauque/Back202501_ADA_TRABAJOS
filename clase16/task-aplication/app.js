// Importaciones
const readlineSync = require('readline-sync') // para leer la entreda del usuario
const taskController = require('./controllers/taskController')

// Funcion principal que gestione el flujo de la aplicacion
function main() {
    let option;
    do {
        console.log('\nGestor de Tareas');
        console.log('1. Ver tareas');
        console.log('2. Agregar tareas');
        console.log('3. Eliminar tarea');
        console.log('4. Salir');

        // leemos la opcion seleccionada por el usuario
        option = readlineSync.question('Elija una opcion: ')

        //
        switch (option) {
            case '1':
                taskController.showTasks() // muestra las tareas
                break;
            case '2':
                taskController.addTask() // agrega una tarea
                break;
            case '3':
                taskController.removeTask() //eliminamos la tarea
                break;
            case '4':
                console.log("Hasta luego!");
                break;
            default:
                console.log('Opcion invalida');
        }
    } while (option !== '4') // el ciclo sigue hasta que el usuario elija salir
}

main() //llamamos a la funcion principal
