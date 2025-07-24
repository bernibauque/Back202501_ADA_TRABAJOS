function saludar(nombre: string, saludo?: string): string {
    if (!saludo) {
      saludo = "Hola";
    }
    return `${saludo}, ${nombre}`;
  }
  
  console.log(saludar("Lucía")); // Hola, Lucía
  console.log(saludar("Lucía", "¡Buenos días!")); // ¡Buenos días!, Lucía
  