let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

// 1. Agregar "Impresora" al inventario
inventario.push("Impresora");

// 2. Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
    console.log("La Tablet está en el inventario.");
} else {
    console.log("La Tablet no está en el inventario.");
}

// 3. Eliminar el primer producto del inventario
let productoEliminado = inventario.shift();
console.log("Producto eliminado:", productoEliminado);

// 4. Mostrar el inventario actualizado como una cadena
let inventarioString = inventario.join(", ");
console.log("Inventario actualizado:", inventarioString);

// Resultado esperado:
// "La Tablet no está en el inventario."
// "Producto eliminado: Laptop"
// "Inventario actualizado: Teclado, Mouse, Monitor, Impresora"
