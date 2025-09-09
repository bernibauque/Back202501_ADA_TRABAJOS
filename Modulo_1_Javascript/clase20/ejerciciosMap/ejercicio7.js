const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
    return costo * 1.21;
}

const sumarGanancia = function (costo) {
    return costo * 1.5;
}

// Primero sumamos la ganancia y luego agregamos el IVA
const preciosFinales = costos.map((costo) => agregarIVA(sumarGanancia(costo)));

console.log(preciosFinales);
// Debería mostrar [ 22.6875, 101.64, 177.87, 83.03625 ]
