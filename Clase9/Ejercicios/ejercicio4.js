// Pedimos al usuario que ingrese un nombre
let nombreUsuario = prompt("Ingrese su nombre:");
let miNombre = "Bernardita"; // Cambia este valor si es necesario

// Verificamos si los nombres coinciden
if (nombreUsuario.toLowerCase() === miNombre.toLowerCase()) {
    console.log("¡Hola, tocaya!");
} else {
    console.log(`Hola, ${nombreUsuario}, tu nombre es diferente al mío.`);
}
