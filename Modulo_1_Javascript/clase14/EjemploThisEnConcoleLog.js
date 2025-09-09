// Podemos usar el this en console.log pero de esta manera: 
const persona = {
    nombre: 'Berni',
    edad: 26,
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};

persona.saludar(); // Imprimirá: Hola, soy Berni y tengo 26 años.

// No podemos usarlo de otra manera ya que cuando estás ejecutando
// código directamente en la consola del navegador o en un entorno como Node.js
// (fuera de un contexto específico de objeto o función), this no está vinculado
// a ningún objeto en particular. Por lo tanto, no podrías usar this.nombre
// directamente en console.log() (por ejemplo) fuera de un método de objeto o
// de una función donde this tenga un contexto definido.


