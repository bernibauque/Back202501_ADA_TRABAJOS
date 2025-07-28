// RECORDAR:
// FOR IN -> CLAVES (obj) / INDICES (arrays)
// FOR OF -> VALORES (iterables) NO objeto tradicional

// Ejemplo basico con array 
export let lenguajes = ["javascript", "Python", "Java"]

for (let lenguaje of  lenguajes) {
    console.log(`Ejemplo array: ${lenguaje}`);
}

// Ejemplo con una cadena de texto
let saludo = "Hola chicas"

for (let letra of saludo) {
    console.log(`Ejemplo cadena de texto: ${letra}`);
}