// 1. Definimos un enum numerico
enum colores {
    Rojo, // 0
    Verde, // 1
    Azul // 2
}
// Acceder a los valores del enum
let coloresFavoritos: colores = colores.Verde;
console.log('Color favorito (por numero): ', coloresFavoritos);
console.log('Nombre del color por indice: ', colores[coloresFavoritos]);

// 2. Definicion de un enum de cadenas
enum Direcciones {
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O'
} 
// Asignar un valor del enum a una variable
let direccionViaje: Direcciones = Direcciones.Norte
console.log('Direccion del viaje: ', direccionViaje);