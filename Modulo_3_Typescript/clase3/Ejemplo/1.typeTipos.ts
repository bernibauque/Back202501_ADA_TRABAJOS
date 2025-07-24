// Alias de tipos

// 1. alias tipos primitivos
type ID = number; // alias para numeros 
type Nombre = string; // alias para numeros 
type Activo = boolean; // alias para numeros 

// Usando los alias para declarar variables
let usuarioId: ID = 123; 
let nombreUsuario: Nombre = "Lucia"; 
let cuentaActiva: Activo = true; 

console.log(`Usuario: ${nombreUsuario}, ID: ${usuarioId}, cuenta activa: ${cuentaActiva}`);

// 2. Alias para objetos
type Direccion = {
    calle: string; // a las propiedades les aplico el tipo
    ciudad: string;
    codigoPostal:number;
}

// Usamos el alias direccion para crear un objeto con las mismas propiedades
let miDireccion : Direccion = {
    calle: "mendoza",
    ciudad: "Tucuman",
    codigoPostal: 1234
}
console.log(`Vivo en la calle: ${miDireccion.calle}, ciudad: ${miDireccion.ciudad}, CP: ${miDireccion.codigoPostal}`);

// 3. Alias de union de tipos
// donde una variable puede tener uno o varios tipos posibles
type Resultado = "exito" | "error" 
type idUsuario = string | number

// Usamos ambos alias:
let estadoOperacion: Resultado = "exito"
let idUsuario1: idUsuario = 1234
let idUsuario2: idUsuario = "1234basd"

console.log(`Estado de operacion: ${estadoOperacion}, usuario Id: ${idUsuario1}`);

