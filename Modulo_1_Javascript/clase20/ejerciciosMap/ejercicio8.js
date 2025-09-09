const productos = ['celular', 'notebook', 'monitor'];
const costos = [12.5, 56, 98];

const agregarIVA = function (costo) {
    return costo * 1.21;
}

const sumarGanancia = function (costo) {
    return costo * 1.5;
}

const preciosFinales = costos.map((costo, index) => {
    const precioConGanancia = sumarGanancia(costo);
    const precioFinal = agregarIVA(precioConGanancia);
    return `${productos[index]} ${precioFinal}`;
});

console.log(preciosFinales);
// Debería mostrar [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]





