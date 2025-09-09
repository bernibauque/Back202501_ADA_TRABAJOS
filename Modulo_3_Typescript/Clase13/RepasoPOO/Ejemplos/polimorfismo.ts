// Clase base "Animal"
export class Animal {
  // Método que imprime un sonido genérico
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

// Clase "Perro" que hereda de "Animal"
class Perro extends Animal {
  // "override" indica que estamos redefiniendo el método de la clase base
  override hacerSonido(): void {
    console.log("Guau!");
  }
}

// Clase "Gato" que hereda de "Animal"
class Gato extends Animal {
  override hacerSonido(): void {
    console.log("Miau!");
  }
}

// Creamos un arreglo de animales, mezclando Perro y Gato
const animales: Animal[] = [new Perro(), new Gato()];

// Recorremos el arreglo y llamamos a "hacerSonido" de cada animal
// Gracias al polimorfismo, se ejecuta el método correcto según el tipo real del objeto
animales.forEach(a => a.hacerSonido());
