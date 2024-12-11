// Creamos un string
let DescripcionPerro = '  El perro Aleman es un perro muy inteligente y leal.  '
console.log(`Cadena original: ${DescripcionPerro}`);

// PROPIEDADES:

// 1. Propiedad .length: Devuelve la longitud de la cadena
console.log("La longitud de la cadena con .length", DescripcionPerro.length);

// 2. Propiedad .indexOf: Devuelve el primer indice donde se encuentra una subcadena (o -1 si no esta)
let indiceInteligente = DescripcionPerro.indexOf("inteligente")
console.log("Indice de 'inteligente' con indexOf:", indiceInteligente);
let indiceLabrador = DescripcionPerro.indexOf('Labrador')
console.log("Indice de 'Labrador' con indexOf:", indiceLabrador);

// METODOS

// 3. Metodo Slice: Extrae una parte de la cadena entre dos indices y devuelve una nueva cadena
let subCadena = DescripcionPerro.slice(2, 17)
console.log(`Subcadena despues de slice(2, 17): ${subCadena}`);

// 4. Metodo trim: Elimina los espacios en blanco de adelante y atras
let cadenaEspacios = DescripcionPerro.trim()
console.log(`Cadena despues de trim: ${cadenaEspacios}`);

// 5. Metodo Replace: Remplaza una subcadena por otra
let remplazo = DescripcionPerro.replace("inteligente", "gordito")
console.log(`Cadena despues de replace: ${remplazo}`);

// 6. Metodo Split: Divide la cadena en un array seguen un delimitador
let palabras = DescripcionPerro.split(" ")
console.log("Cadena dividida con split: ", palabras);


