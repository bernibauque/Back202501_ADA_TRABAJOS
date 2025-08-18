// Intervalo indefinido (Cancelacion manual o hasta que termine)

let contador = 0;

const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador (Indefinido): ${contador}`);
    //clearInterval(intervalo)
}, 1000)

console.log("Intervalo indefinido iniciado... ");