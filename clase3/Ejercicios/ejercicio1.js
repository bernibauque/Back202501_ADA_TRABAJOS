const fs = require('fs');
const filePath = './libros.json'; // Archivo donde se almacenarán los libros

// Función para leer los libros desde el archivo
const leerLibros = () => {
    // Si el archivo no existe, creamos un archivo vacío con un arreglo
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8'); // Leemos el archivo
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de libros
};

// Función para escribir los libros en el archivo
const escribirLibros = (libros) => {
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2)); // Escribimos los libros en el archivo
};

// Agregar un libro
const agregarLibro = (nombreLibro) => {
    const libros = leerLibros(); // Leemos los libros existentes
    libros.push({ id: libros.length + 1, nombre: nombreLibro }); // Agregamos el nuevo libro
    escribirLibros(libros); // Guardamos la lista actualizada
    console.log(`Libro agregado: "${nombreLibro}"`);
};

// Listar los libros
const listarLibros = () => {
    const libros = leerLibros(); // Leemos los libros
    console.log('Lista de libros favoritos:');
    libros.forEach(libro => {
        console.log(`${libro.id}. ${libro.nombre}`);
    });
};

// Ejemplo de uso de las funciones
agregarLibro('El Principito');
listarLibros();


