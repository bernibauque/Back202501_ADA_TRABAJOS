// Definimos una clase llamada "Persona"
class Persona {
  // Atributo privado: solo accesible dentro de la clase
  private _nombre: string;

  // Constructor: se ejecuta al crear un nuevo objeto de la clase
  constructor(nombre: string) {
    this._nombre = nombre; // Asigna el valor recibido al atributo privado
  }

  // Getter: permite obtener el valor de "_nombre" desde fuera de la clase
  // pero sin acceder directamente al atributo privado
  get nombre(): string {
    return this._nombre;
  }
}

// Creamos una nueva persona con el nombre "Ana"
const p = new Persona("Ana");

// Usamos el getter "nombre", que devuelve el valor de "_nombre"
console.log(p.nombre); // "Ana"
