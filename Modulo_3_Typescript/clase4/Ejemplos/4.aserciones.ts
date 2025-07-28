// Ejemplo 1. Asecion basica de any a string
let valorGenerico: any = "este es un texto"
let longitudString: number = (valorGenerico as string).length
console.log(`La longitud del string es: ${longitudString}`);

// Ejemplo 2: Aserciones de tipo union
function obtenerNombreEnMayusculas(nombre: string | null): string{
    if (nombre) {
        return (nombre as string).toUpperCase()
    } else {
        return "Nombre no proporcionado"
    }
}

console.log(obtenerNombreEnMayusculas("Alejandra"));
console.log(obtenerNombreEnMayusculas(null));

// Ejemplo 3: Aserciones con unknow 
export let valorDesconocido : unknown = "Este es un valor desconocido"
if (typeof valorDesconocido === "string") {
    let longitud :number = (valorDesconocido as string).length
    console.log(`La longitud del string desconocido es: ${longitud}`);
}


