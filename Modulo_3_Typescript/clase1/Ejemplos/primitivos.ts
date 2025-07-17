// Ejemplo de tipos de datos primitivos

//1. string
let nombre: string = "Berni"
let saludo: string = `Hola, ${nombre}, bienvenida al modulo 3`
console.log(saludo);

//2. number
let entero: number = 42
let decimal: number = 3.14
let cientifico: number = 1e5
console.log(entero);
console.log(decimal);
console.log(cientifico);

//3. boolean
let esEstudiante: boolean = true
let tieneLicencia: boolean = false
console.log(esEstudiante);
console.log(tieneLicencia);

//4. null
let valorNulo: null = null
console.log(valorNulo);

//5. undefined
let valorIndefinido: undefined = undefined
console.log(valorIndefinido);

//6. symbol
let id1: symbol = Symbol("id")
let id2: symbol = Symbol("berni")
console.log("Son simbolos unicos:", id1 === id2);
