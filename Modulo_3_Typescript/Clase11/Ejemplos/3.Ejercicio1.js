/*
1. Simulación de Tiempo de Respuesta de un Servidor
Imagina que quieres simular cómo responde un servidor cuando un cliente realiza una petición. 
Para este ejercicio, el servidor tiene un tiempo de respuesta variable (aleatorio) entre 1 y 3 segundos. 
Debes escribir una función llamada simulacionServidor que simule este comportamiento utilizando async y await.
La función deberá:
• Tener un retardo de tiempo aleatorio.
• Retornar el mensaje "Servidor listo" una vez que haya transcurrido el tiempo.
Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos asíncronos, 
fundamental cuando trabajamos con peticiones de red en el desarrollo web.
*/

// creamos una funcion retraso
const retraso = () => new Promise(resolve => {
    // generar el tiempo 1 a 3
    const tiempoRandom = Math.random() * 2000 + 1000 // de 1 a 3
    setTimeout(resolve, tiempoRandom)
})

async function simulacionServidor() {
    await retraso()
    return "Servidor listo"
}

simulacionServidor().then(console.log)
