const fs = require('fs');
const filePath = './compras.json'; // Archivo donde se almacenarán las compras

// Función para leer las compras desde el archivo
const leerCompras = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de compras
};

// Función para escribir las compras en el archivo
const escribirCompras = (compras) => {
    fs.writeFileSync(filePath, JSON.stringify(compras, null, 2)); // Escribimos las compras en el archivo
};

// Agregar una compra
const agregarCompra = (nombre, precio) => {
    const compras = leerCompras(); // Leemos las compras existentes
    compras.push({ id: compras.length + 1, nombre, precio: parseFloat(precio) }); // Agregamos la nueva compra
    escribirCompras(compras); // Guardamos la lista actualizada
    console.log(`Compra agregada: ${nombre}, precio: ${precio}`);
};

// Listar las compras
const listarCompras = () => {
    const compras = leerCompras(); // Leemos las compras
    console.log('Lista de compras:');
    compras.forEach(compra => {
        console.log(`${compra.id}. ${compra.nombre} - Precio: ${compra.precio}`);
    });
};

// Eliminar una compra
const eliminarCompra = (idCompra) => {
    let compras = leerCompras(); // Leemos las compras
    compras = compras.filter(compra => compra.id !== idCompra); // Filtramos para eliminar la compra por ID
    escribirCompras(compras); // Guardamos la lista actualizada
    console.log('Compra eliminada.');
};

// Ejemplo de uso de las funciones
agregarCompra('Laptop', 1200);
listarCompras();
eliminarCompra(1);
listarCompras();
