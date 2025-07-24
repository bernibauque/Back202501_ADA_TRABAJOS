function crearPersona(nombre: string, edad: number, pais: string): { nombre: string, edad: number, pais: string } {
    return { nombre, edad, pais };
  }
  
  export const persona = crearPersona("Ana", 25, "Argentina");
  console.log(persona); // { nombre: 'Ana', edad: 25, pais: 'Argentina' }
  