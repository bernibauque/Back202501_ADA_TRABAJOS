let horaActual = 15; // Variable global

function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}
mostrarSaludo(); // Resultado esperado: "Buenas tardes"

