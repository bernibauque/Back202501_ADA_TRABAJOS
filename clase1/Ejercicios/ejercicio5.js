function generarIniciales(nombreCompleto) {
    let palabras = nombreCompleto.split(" "); // Dividimos el nombre en palabras
    let iniciales = ""; // Inicializamos un string vacío para las iniciales

    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase(); // Tomamos la primera letra y la convertimos a mayúscula
    }

    return iniciales; // Retornamos las iniciales
}

// Probamos la función
let nombre = "juan perez gomez";
console.log(generarIniciales(nombre)); // Debe devolver "JPG"
