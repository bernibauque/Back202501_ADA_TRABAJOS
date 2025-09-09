// Definimos una clase llamada "Ejemplo"
class Ejemplo {
  // "public" → este atributo se puede acceder desde cualquier parte del programa.
  // Por defecto, si no se especifica, las propiedades son públicas.
  public nombre: string = "Ana";

  // "private" → este atributo solo se puede acceder dentro de la clase "Ejemplo".
  // No es posible accederlo directamente desde fuera.
  private edad: number = 20;

  // "protected" → este atributo se puede acceder dentro de la clase "Ejemplo"
  // y también desde clases que hereden de "Ejemplo".
  protected curso: string = "Backend";
}
