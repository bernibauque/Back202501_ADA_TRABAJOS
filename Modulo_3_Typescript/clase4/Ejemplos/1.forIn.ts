// Ejemplo basico de un objeto
let alumna = {
    nombre: "Naza",
    edad: 27,
    curso: "Back end"
}

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}

//[propiedad as keyof typeof alumna]: Con esto, le decimos al compilador que la variable es una 
// clave valida de las propiedades del objeto alumna. Es decir, una de las propiedades de alumna
// (nombre, edad, curso)

// Ejemplo basico con array 
let lenguajes = ["javascript", "Python", "Java"]

for (let indice in lenguajes) {
    console.log(`Indice: ${indice}, Valor: ${lenguajes[indice]}`);
}
