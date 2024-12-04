// Ejemplo: Scope global y local en JavaScript

// 1. Variable con scope global
// Las variables definidas fuera de cualquier función son accesibles en todo el programa.
let mensajeGlobal = "Estoy en el scope global";

function mostrarMensajes() {
    // 2. Variable con scope local
    // Las variables definidas dentro de una función solo existen dentro de esa función.
    let mensajeLocal = "Estoy en el scope local";

    console.log(mensajeGlobal); // Puede acceder a la variable global
    console.log(mensajeLocal);  // Accede a la variable local
}

mostrarMensajes(); // Llama a la función y muestra ambos mensajes

// Intentamos acceder a la variable local fuera de la función
// Esto genera un error porque "mensajeLocal" solo existe dentro de la función.
console.log(mensajeLocal); // ❌ Esto causará un error: ReferenceError
