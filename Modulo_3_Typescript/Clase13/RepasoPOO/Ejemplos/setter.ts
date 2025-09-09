// Definimos la clase "Persona"
export class Persona {
  // Atributo privado: solo accesible dentro de la clase
  private _edad: number = 0;

  // Setter: permite establecer un valor para "_edad"
  // Aquí agregamos una validación para que no se acepten números negativos
  set edad(valor: number) {
    if (valor >= 0) this._edad = valor;
    else console.log("Edad inválida"); // Mensaje si el valor no es válido
  }

  // Getter: permite obtener el valor de "_edad"
  get edad(): number {
    return this._edad;
  }
}
