let libros = [
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" }
  ];
  
  function listarLibros(libros: { titulo: string, autor: string }[]): void {
    libros.forEach(libro => {
      console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
  }
  
  listarLibros(libros);
  // Título: Don Quijote de la Mancha, Autor: Miguel de Cervantes
  // Título: Cien Años de Soledad, Autor: Gabriel García Márquez
  // Título: El Principito, Autor: Antoine de Saint-Exupéry
  