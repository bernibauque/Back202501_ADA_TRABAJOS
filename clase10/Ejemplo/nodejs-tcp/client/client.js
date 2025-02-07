// PASO 1: Importaciones
const net = require('net')
const readline = require('readline-sync')

// PASO 2: Definimos las opciones de conexion para el cliente
const options = {
    port: 4000,
    host: '127.0.0.1'
}

// PASO 3: Crear una nueva conexion con el servidor
const client = net.createConnection(options)

// PASO 5: Manejo de eventos
client.on('connect', () => {
    console.log('Conexion satisfactoria!');
    sendLine() // llamo a la funcion sendLine para que el usuario ingrese los datos
})

client.on('data', (data) => {
    console.log('El servidor dice: ' + data);
    sendLine()
})

client.on('error', (err) => {
    console.log(err.message);
})

// PASO 4: Definimos la funcion sendLine() que permite al usuario
// ingresar un mensaje y decide que hacer con el
function sendLine() {
    //muestra un prompt y lee la entrada del usuario de manera sincrona
    let line = readline.question('\nDigita alguna cosa\t')
    if (line == "0") { // verifica si el usuario 0
        client.end() // cierra la conexion con el servidor si se ingreso 0
    } else {
        client.write(line) // envia el mensaje ingresado por el usuario.
    }
}