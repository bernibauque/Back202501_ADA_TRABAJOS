// creamos una promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado pendiente: La operacion comenzo...");
    
    // simulamos una operacion asincrona
    setTimeout(() => {
        // generamos un valor booleano aleatorio (true = exito / false = fallo)
        const exito = Math.random() > 0.5

        if (exito) {
            resolve("La operacion fue completada con exito.")
        } else {
            reject("Error: La operacion fallo.")
        }
    }, 2000)
})

// Manejo de la promesa
miPromesa
.then((resultado) => {
    console.log("Exito:", resultado);
})
.catch((error) => {
    console.error("Error:", error);
})
.finally(() => {
    console.log("Promesa finalizada.");
})

// mensaje que se imprime inmediatamente despues de crear la promesa (antes que se complete)
console.log("Promesa creada, esperando resultado...");
