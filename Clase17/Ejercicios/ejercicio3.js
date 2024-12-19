let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto al array
    let nuevoProducto = { nombre: "Galletas", precio: 25 };
    productos.push(nuevoProducto);

    // 2. Eliminar el último producto del array
    productos.pop();

    // 3. Encontrar el índice de un producto específico usando forEach
    let productoBuscado = "Chocolates";
    let indiceProductoBuscado = -1;

    productos.forEach((producto, index) => {
        if (producto.nombre === productoBuscado) {
            indiceProductoBuscado = index;
        }
    });

    // 4. Verificar si existe un producto con precio mayor a 50 usando some
    let existeProductoMayor50 = productos.some(producto => producto.precio > 50);

    // 5. Devolver una cadena de nombres de productos separados por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    // Devolver los resultados como un objeto
    return {
        productos,
        indiceProductoBuscado,
        existeProductoMayor50,
        nombresProductos
    };
}

// Llamada a la función y mostrar el resultado
let resultado = gestionarProductos(productos);
console.log("Resultado:", resultado);

