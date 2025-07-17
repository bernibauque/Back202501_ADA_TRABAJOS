const fs = require('fs');
const filePath = './inventario.json'; // Archivo donde se almacenarán los productos

// Función para leer los productos desde el archivo
const leerProductos = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de productos
};

// Función para escribir los productos en el archivo
const escribirProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2)); // Escribimos los productos en el archivo
};

// Agregar un producto
const agregarProducto = (nombreProducto, cantidad) => {
    const productos = leerProductos(); // Leemos los productos existentes
    productos.push({ id: productos.length + 1, nombre: nombreProducto, cantidad: parseInt(cantidad) }); // Agregamos el nuevo producto
    escribirProductos(productos); // Guardamos la lista actualizada
    console.log(`Producto agregado: ${nombreProducto}, cantidad: ${cantidad}`);
};

// Listar los productos
const listarProductos = () => {
    const productos = leerProductos(); // Leemos los productos
    console.log('Lista de productos en inventario:');
    productos.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - ${producto.cantidad} unidades`);
    });
};

// Actualizar la cantidad de un producto
const actualizarProducto = (idProducto, nuevaCantidad) => {
    const productos = leerProductos(); // Leemos los productos
    const producto = productos.find(p => p.id === idProducto); // Buscamos el producto por su id
    if (producto) {
        producto.cantidad = parseInt(nuevaCantidad); // Actualizamos la cantidad
        escribirProductos(productos); // Guardamos la lista actualizada
        console.log(`Producto actualizado: ${producto.nombre}, nueva cantidad: ${producto.cantidad}`);
    } else {
        console.log('Producto no encontrado.');
    }
};

// Ejemplo de uso de las funciones
agregarProducto('Manzanas', 50);
listarProductos();
actualizarProducto(1, 30);
listarProductos();

