const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
];

// Paso 1: Filtrar productos con precio >= 50.
const selectedProducts = products.filter(product => product.price >= 50);

// Paso 2: Obtener los nombres de los productos seleccionados.
const productNames = selectedProducts.map(product => product.name);

// Paso 3: Calcular el precio total de los productos seleccionados.
const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);

console.log(`Productos seleccionados: ${productNames.join(', ')}`);
console.log(`Precio total: $${totalPrice}`);
// Resultado:
// Productos seleccionados: Laptop, Teclado, Monitor, Audífonos
// Precio total: $1325
