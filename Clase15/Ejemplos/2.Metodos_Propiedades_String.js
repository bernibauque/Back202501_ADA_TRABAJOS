// Creamos una cadena de ejemplo
let descripcionPerro = "  El Pastor Alemán es un perro muy inteligente y leal.  ";
console.log("Cadena original:", `"${descripcionPerro}"`);

// PROPIEDADES:

// 1. Propiedad .length: Devuelve la longitud de la cadena.
console.log("Longitud de la cadena con .length:", descripcionPerro.length);
// Resultado: 55 (contando los espacios)

// 2. Propiedad indexOf: Devuelve el primer índice donde se encuentra una subcadena (o -1 si no está).
let indiceInteligente = descripcionPerro.indexOf("inteligente");
console.log("Índice de 'inteligente' con indexOf:", indiceInteligente);
// Resultado: 34
let indiceLabrador = descripcionPerro.indexOf("Labrador");
console.log("Índice de 'Labrador' con indexOf (no está en la cadena):", indiceLabrador);
// Resultado: -1

// METODOS:

// 3. Método slice: Extrae una parte de la cadena entre dos índices y devuelve una nueva cadena.
let subcadena = descripcionPerro.slice(3, 17);
console.log("Subcadena con slice(3, 17):", `"${subcadena}"`);
// Resultado: "Pastor Alemán"

// 4. Método trim: Elimina los espacios en blanco al inicio y al final de la cadena.
let cadenaSinEspacios = descripcionPerro.trim();
console.log("Cadena después de trim():", `"${cadenaSinEspacios}"`);
// Resultado: "El Pastor Alemán es un perro muy inteligente y leal."

// 5. Método replace: Reemplaza una subcadena por otra.
let cadenaReemplazada = descripcionPerro.replace("inteligente", "valiente");
console.log("Cadena después de replace('inteligente', 'valiente'):", `"${cadenaReemplazada}"`);
// Resultado: "  El Pastor Alemán es un perro muy valiente y leal.  "

// 6. Método split: Divide la cadena en un array según un delimitador.
let palabras = descripcionPerro.split(" ");
console.log("Cadena dividida con split(' '):", palabras);
// Resultado: ["", "", "El", "Pastor", "Alemán", "es", "un", "perro", "muy", "inteligente", "y", "leal.", "", ""]

