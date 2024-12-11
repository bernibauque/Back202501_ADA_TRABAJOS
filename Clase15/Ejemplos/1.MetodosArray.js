// Creamos un array inicial de razas de perros
let razasDePerros = ["Labrador", "Bulldog", "Beagle", "Pug"];
console.log("Array inicial:", razasDePerros);

// 1. Método push: Agrega uno o más elementos al final del array.
razasDePerros.push("Husky");
console.log("Después de push('Husky'):", razasDePerros);
// Resultado: ["Labrador", "Bulldog", "Beagle", "Pug", "Husky"]

// 2. Método pop: Elimina el último elemento del array y lo devuelve.
let razaEliminada = razasDePerros.pop();
console.log("Después de pop():", razasDePerros);
console.log("Raza eliminada con pop:", razaEliminada);
// Resultado: ["Labrador", "Bulldog", "Beagle", "Pug"] - Raza eliminada: "Husky"

// 3. Método shift: Elimina el primer elemento del array y lo devuelve.
let primeraRaza = razasDePerros.shift();
console.log("Después de shift():", razasDePerros);
console.log("Raza eliminada con shift:", primeraRaza);
// Resultado: ["Bulldog", "Beagle", "Pug"] - Raza eliminada: "Labrador"

// 4. Método unshift: Agrega uno o más elementos al inicio del array.
razasDePerros.unshift("Chihuahua");
console.log("Después de unshift('Chihuahua'):", razasDePerros);
// Resultado: ["Chihuahua", "Bulldog", "Beagle", "Pug"]

// 5. Método join: Une todos los elementos del array en un string, separados por un delimitador.
let razasEnString = razasDePerros.join(" - ");
console.log("Array unido con join(' - '):", razasEnString);
// Resultado: "Chihuahua - Bulldog - Beagle - Pug"

// 6. Método indexOf: Devuelve el primer índice donde se encuentra el elemento (o -1 si no está).
let indiceBeagle = razasDePerros.indexOf("Beagle");
console.log("Índice de 'Beagle' con indexOf:", indiceBeagle);
// Resultado: 2
let indicePastorAleman = razasDePerros.indexOf("Pastor Alemán");
console.log("Índice de 'Pastor Alemán' con indexOf (no está en el array):", indicePastorAleman);
// Resultado: -1

// 7. Método lastIndexOf: Devuelve el último índice donde se encuentra el elemento (o -1 si no está).
let razasDuplicadas = ["Bulldog", "Beagle", "Pug", "Beagle", "Dálmata"];
console.log("Array con duplicados:", razasDuplicadas);
let ultimoIndiceBeagle = razasDuplicadas.lastIndexOf("Beagle");
console.log("Último índice de 'Beagle' con lastIndexOf:", ultimoIndiceBeagle);
// Resultado: 3

// 8. Método includes: Devuelve true si el elemento existe en el array, false si no.
let tienePug = razasDePerros.includes("Pug");
console.log("¿El array incluye 'Pug'?", tienePug);
// Resultado: true
let tieneDálmata = razasDePerros.includes("Dálmata");
console.log("¿El array incluye 'Dálmata'?", tieneDálmata);
// Resultado: false
