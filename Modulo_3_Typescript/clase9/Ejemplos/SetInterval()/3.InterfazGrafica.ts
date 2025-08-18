// Ejemplo de actualizacion de interfaz grafica

function actualizarReloj() {
    // creamos una instancia de Date para obtener la fecha y hora actualizada
    const ahora = new Date()

    // Obtenemos la hora actual de la instancia date
    const horas = ahora.getHours()

    // obtenemos los minutos actuales de la instancia date
    const minutos = ahora.getMinutes()

    // obtenemos los seg de la instancia date
    const segundos = ahora.getSeconds()

    console.log(`${horas}:${minutos}:${segundos}`);
}

// creamos un intervalo que llame a la funcion actualizarReloj 
let relojIntervalo = setInterval(actualizarReloj, 1000)