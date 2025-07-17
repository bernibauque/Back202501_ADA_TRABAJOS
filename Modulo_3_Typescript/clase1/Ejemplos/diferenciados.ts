// Ejemplos de tipos diferenciados en typescript

// 1. any: Permite almacenar cualquier tipo de dato
let variableAny: any = "Hola, soy un any"
console.log(variableAny);
let variableAny2: any = 27
console.log(variableAny2);
let variableAny3: any = {name: "Berni"}
console.log(variableAny3);

// 2. unknow: Similar a any pero mas robusto y seguro (requiere verificacion)
let variableUnknow: unknown = "Hola, soy un Unknow"
console.log(variableUnknow);

// 3. void: Se usa en funciones que gral no retornan nada
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Estos es una funcion void")

// 4. never: Representa el tipo de funciones que nunca retornan 
function throwError(errorMsg: string): never {
    throw new Error(errorMsg)
}
//throwError("Esto es un error y nunca retorna")

function inifinitLoop(): never {
    while (true) {
        console.log("Este bucle nunca termina");
    }
}
inifinitLoop()
