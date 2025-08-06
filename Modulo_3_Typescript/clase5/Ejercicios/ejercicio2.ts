/**Ejercicio 2: Creación de Objetos y Atributos
1.Define un objeto que represente un libro con las siguientes 
propiedades: título, autor, y año de publicación.
2.Crea una instancia de ese objeto y muestra sus propiedades en la consola. */

//2.interfaz
interface Libro {
  titulo: string;
  autor: string;
  anioPublicacion: number;
}

//1. objeto
const miLibro: Libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

// Instancia
console.log("Título:", miLibro.titulo);
console.log("Autor:", miLibro.autor);
console.log("Año de publicación:", miLibro.anioPublicacion);

  