// Ejemplo de una funcion generica
function identidad <T>(valor: T) : T {
    return valor
}

// Ejemplo de uso
let numero = identidad<number>(10) // T es un numero 
let letra = identidad<string>("Berni")
let boolean = identidad<boolean>(false)
console.log(numero,letra, boolean);
