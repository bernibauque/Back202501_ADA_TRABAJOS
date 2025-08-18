// Intervalo concondicion de parada

let contador1 = 0

const intervalo1 = setInterval(() => {
    contador1 ++
    console.log(`Contador (con condicion): ${contador1}`);
    
    if (contador1 === 5) {
        clearInterval(intervalo1)
        console.log("Intervalo con condicion detenido al llegar a 5.");
    }
}, 1000)