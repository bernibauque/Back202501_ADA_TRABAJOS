function crearLibro(titulo: string, autor: string, paginas: number): { titulo: string, autor: string, paginas: number } {
    return { titulo, autor, paginas };
  }
  
  const libro1 = crearLibro("El Quijote", "Miguel de Cervantes", 800);
  const libro2 = crearLibro("Cien Años de Soledad", "Gabriel García Márquez", 400);
  
  console.log(libro1); // { titulo: 'El Quijote', autor: 'Miguel de Cervantes', paginas: 800 }
  console.log(libro2); // { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', paginas: 400 }
  