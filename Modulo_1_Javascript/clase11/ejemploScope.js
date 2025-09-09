// Scope: El alcance que llega a tener una variable

let mensaje = "Hola";

function saludar() {
    let mensaje = "Chau";
    return mensaje
}

console.log(saludar());
console.log(mensaje);