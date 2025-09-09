
let listaDeSuperMercado = [
    'Bife de chorizo',
    'Coca Cola',
    'Bananas',
    'Lechuga',
    'Chimichurri',
    'Lata de tomates',
    'Arvejas',
    'Cereales',
    'Pechuga de pollo',
    'Leche'
];

// Agregar Papas al final 
listaDeSuperMercado.push('Papas');

// Eliminar el primer artículo de la lista
listaDeSuperMercado.shift();

// Mostrar cada ítem por consola 
let contador = 1;
listaDeSuperMercado.forEach(item => {
    console.log(`${contador}. ${item}`);
    contador++;
});

// Buscar la posición del artículo 'Cereales'
let posicionCereales = listaDeSuperMercado.lastIndexOf('Cereales');
if (posicionCereales !== -1) {
    console.log(`La posición de 'Cereales' en la lista es ${posicionCereales + 1}`);
} else {
    console.log("El artículo 'Cereales' no se encontró en la lista.");
}

