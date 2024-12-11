let oracion = "JavaScript es un lenguaje poderoso y versátil";

// 1. Dividir la oración en palabras
let palabras = oracion.split(" ");

// 2. Inicializar arrays para palabras cortas y largas
let palabrasCortas = [];
let palabrasLargas = [];

// 3. Clasificar las palabras según su longitud
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length < 5) {
        palabrasCortas.push(palabras[i]);
    } else {
        palabrasLargas.push(palabras[i]);
    }
}

// 4. Mostrar las palabras clasificadas
console.log("Palabras cortas:", palabrasCortas);
console.log("Palabras largas:", palabrasLargas);

// Resultado esperado:
// "Palabras cortas: ['es', 'un', 'y']"
// "Palabras largas: ['JavaScript', 'lenguaje', 'poderoso', 'versátil']"
