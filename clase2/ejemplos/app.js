// Importamos el módulo nativo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Definimos la ruta del archivo JSON que vamos a manipular
const rutaArchivo = './productos.json';

// Paso 1: Leer el archivo JSON
// Utilizamos el método 'readFile' del módulo 'fs'. Este método lee el contenido del archivo de forma asíncrona.
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        // Si ocurre un error al leer el archivo, mostramos el error en la consola
        console.error('Error al leer el archivo:', err);
        return; // Detenemos la ejecución si hay un error
    }

    // Convertimos el contenido del archivo JSON (texto) a un objeto de JavaScript utilizando 'JSON.parse'
    const productos = JSON.parse(data);

    // Mostramos el contenido actual del archivo JSON en la consola
    console.log('Productos actuales:', productos);

    // Paso 2: Agregar un nuevo producto al listado
    // Creamos un nuevo objeto que representa el nuevo producto
    const nuevoProducto = {
        id: productos.length + 1, // Calculamos el ID automáticamente
        nombre: 'Mouse', // Nombre del nuevo producto
        precio: 30 // Precio del nuevo producto
    };

    // Añadimos el nuevo producto al array de productos existente
    productos.push(nuevoProducto);

    // Mostramos en la consola el array actualizado con el nuevo producto
    console.log('Productos actualizados:', productos);

    // Paso 3: Escribir el archivo JSON actualizado
    // Convertimos el objeto de JavaScript (productos) nuevamente a texto JSON utilizando 'JSON.stringify'
    const contenidoActualizado = JSON.stringify(productos, null, 2); // Formateamos con 2 espacios para mejor legibilidad

    // Escribimos el nuevo contenido en el archivo JSON utilizando 'writeFile'
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if (err) {
            // Si ocurre un error al escribir en el archivo, mostramos el error en la consola
            console.error('Error al escribir en el archivo:', err);
            return; // Detenemos la ejecución si hay un error
        }

        // Confirmamos en la consola que el archivo ha sido actualizado exitosamente
        console.log('Archivo actualizado correctamente.');
    });
});
