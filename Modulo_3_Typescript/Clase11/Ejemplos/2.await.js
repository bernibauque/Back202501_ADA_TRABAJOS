// funcion que simule un proceso asincrono y se demore 2 seg
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Proceso completado"), 5000)
    })
}

// funcion (principal) que usara async/ await
async function ejecutarProceso() {
    console.log("Iniciando proceso... ");

    // Pausar la ejecucion hasta que procesoLargo se resuelve (despues de 2 seg)
    const resultado = await procesoLargo()
    console.log(resultado);

    console.log("Proceso terminado.");
}

// ejecutamos la funcion principal 
ejecutarProceso()