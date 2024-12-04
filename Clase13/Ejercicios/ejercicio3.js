// Variable global
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
    // Variable local
    let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal); // Accede a la variable global
    console.log(saludoLocal);  // Accede a la variable local
}
mostrarMensaje();

