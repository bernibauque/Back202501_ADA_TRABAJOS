// Importamos la librería prompt-sync para permitir la entrada de datos por consola.
const prompt = require('prompt-sync')();

// Estructura de Datos
// Definimos un array de objetos llamado 'mascotas' que contiene la información de 5 mascotas.
const mascotas = [
    { id: 1, nombre: "Rex", especie: "Perro", edad: 5, disponible: true },
    { id: 2, nombre: "Miau", especie: "Gato", edad: 3, disponible: true },
    { id: 3, nombre: "Nube", especie: "Conejo", edad: 2, disponible: true },
    { id: 4, nombre: "Sombra", especie: "Gato", edad: 4, disponible: true },
    { id: 5, nombre: "Coco", especie: "Perro", edad: 7, disponible: true }
];

// Definimos un array de objetos llamado 'propietarios' que contiene la información de 3 propietarios.
const propietarios = [
    { id: 1, nombre: "Ana Pérez", email: "ana.perez@email.com", mascotasAdoptadas: [] },
    { id: 2, nombre: "Luis García", email: "luis.garcia@email.com", mascotasAdoptadas: [] },
    { id: 3, nombre: "María López", email: "maria.lopez@email.com", mascotasAdoptadas: [] }
];

// Función para agregar una nueva mascota al array 'mascotas'.
function agregarMascota(id, nombre, especie, edad) {
    // Agregamos un nuevo objeto mascota al array 'mascotas' con las propiedades proporcionadas.
    mascotas.push({ id, nombre, especie, edad, disponible: true }); // true: indica que la mascota recién agregada está disponible para adopción
    // Imprimimos un mensaje de confirmación en la consola.
    console.log(`Mascota "${nombre}" agregada con éxito.`);
}

// Función para buscar mascotas en el array 'mascotas' según un criterio (nombre o especie) y un valor.
function buscarMascota(criterio, valor) {
    // Usamos el método filter para crear un nuevo array con las mascotas que cumplen con el criterio de búsqueda.
    // mascota[criterio] se refiere al valor de la propiedad que se pasa como criterio (nombre o especie).
    // toLowerCase() convierte el texto a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas.
    // includes() verifica si el valor buscado está contenido en la propiedad de la mascota.
    return mascotas.filter(mascota =>
        // Verificamos si la mascota tiene la propiedad buscada y si esa propiedad incluye el valor buscado.
        mascota[criterio] && mascota[criterio].toLowerCase().includes(valor.toLowerCase())
    );
}

// Función para registrar un nuevo propietario en el array 'propietarios'.
function registrarPropietario(nombre, email) {
    // Calculamos un nuevo id para el propietario basándonos en la longitud del array 'propietarios'.
    const id = propietarios.length + 1;
    // Agregamos un nuevo objeto propietario al array 'propietarios' con las propiedades proporcionadas.
    propietarios.push({ id, nombre, email, mascotasAdoptadas: [] });
    // Imprimimos un mensaje de confirmación en la consola.
    console.log(`Propietario ${nombre} registrado con éxito.`);
}

// Función para buscar un propietario en el array 'propietarios' según su email.
function buscarPropietario(email) {
    // Usamos el método find para encontrar el primer propietario cuyo email coincida con el email buscado.
    // toLowerCase() convierte el texto a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas.
    return propietarios.find(propietario => propietario.email.toLowerCase() === email.toLowerCase());
}

// Función para adoptar una mascota.
function adoptarMascota(idMascota, idPropietario) {
    // Usamos el método find para encontrar la mascota con el id proporcionado.
    const mascota = mascotas.find(m => m.id === idMascota);
    // Usamos el método find para encontrar el propietario con el id proporcionado.
    const propietario = propietarios.find(p => p.id === idPropietario);

    // Verificamos si la mascota y el propietario existen y si la mascota está disponible.
    if (mascota && propietario && mascota.disponible) {
        // Marcamos la mascota como no disponible.
        mascota.disponible = false;
        // Agregamos el id de la mascota a la lista de mascotas adoptadas del propietario.
        propietario.mascotasAdoptadas.push(idMascota);
        // Imprimimos un mensaje de confirmación en la consola.
        console.log(`Mascota "${mascota.nombre}" adoptada por ${propietario.nombre}.`);
        return true; // Devolvemos true para indicar que la adopción fue exitosa.
    }
    // Si la adopción no fue posible, imprimimos un mensaje de error en la consola.
    console.log("No se pudo realizar la adopción.");
    return false; // Devolvemos false para indicar que la adopción falló.
}

// Función para devolver una mascota.
function devolverMascota(idMascota, idPropietario) {
    // Usamos el método find para encontrar la mascota con el id proporcionado.
    const mascota = mascotas.find(m => m.id === idMascota);
    // Usamos el método find para encontrar el propietario con el id proporcionado.
    const propietario = propietarios.find(p => p.id === idPropietario);

    // Verificamos si la mascota y el propietario existen y si la mascota no está disponible.
    if (mascota && propietario && !mascota.disponible) {
        // Marcamos la mascota como disponible.
        mascota.disponible = true;
        // Eliminamos el id de la mascota de la lista de mascotas adoptadas del propietario.
        propietario.mascotasAdoptadas = propietario.mascotasAdoptadas.filter(id => id !== idMascota);
        // Imprimimos un mensaje de confirmación en la consola.
        console.log(`Mascota "${mascota.nombre}" devuelta por ${propietario.nombre}.`);
        return true; // Devolvemos true para indicar que la devolución fue exitosa.
    }
    // Si la devolución no fue posible, imprimimos un mensaje de error en la consola.
    console.log("No se pudo realizar la devolución.");
    return false; // Devolvemos false para indicar que la devolución falló.
}

// Función para mostrar el menú principal y manejar la interacción con el usuario.
function menuPrincipal() {
    while (true) {
        // Imprimimos el menú de opciones en la consola.
        console.log("\nBienvenido a nuestra Veterinaria!");
        console.log("\nMenú Principal:");
        console.log("1. Agregar mascota");
        console.log("2. Buscar mascota");
        console.log("3. Registrar propietario");
        console.log("4. Buscar propietario");
        console.log("5. Adoptar mascota");
        console.log("6. Devolver mascota");
        console.log("7. Salir");

        // Solicitamos al usuario que seleccione una opción del menú.
        const opcion = parseInt(prompt("\nSelecciona una opción: "));

        // Usamos una estructura switch para manejar la opción seleccionada por el usuario.
        switch (opcion) {
            case 1:
                // Solicitamos los datos de la nueva mascota.
                const idMascota = parseInt(prompt("ID de la mascota: "));
                const nombreMascota = prompt("Nombre de la mascota: ");
                const especie = prompt("Especie de la mascota: ");
                const edad = parseInt(prompt("Edad de la mascota: "));
                // Llamamos a la función agregarMascota con los datos proporcionados.
                agregarMascota(idMascota, nombreMascota, especie, edad);
                break;
            case 2:
                // Solicitamos el criterio de búsqueda (nombre o especie) y el valor a buscar.
                const criterio = prompt("Buscar mascota por nombre o especie (colocar una de estas palabras): ");
                const valor = prompt("Introducir el nombre o especie de la mascota: ");
                // Llamamos a la función buscarMascota con los datos proporcionados y mostramos los resultados.
                console.log("Resultados de búsqueda:", buscarMascota(criterio, valor));
                break;
            case 3:
                // Solicitamos los datos del nuevo propietario.
                const nombrePropietario = prompt("Nombre del propietario: ");
                const email = prompt("Email del propietario: ");
                // Llamamos a la función registrarPropietario con los datos proporcionados.
                registrarPropietario(nombrePropietario, email);
                break;
            case 4:
                // Solicitamos el email del propietario a buscar.
                const emailBusqueda = prompt("Email del propietario a buscar: ");
                // Llamamos a la función buscarPropietario con el email proporcionado y mostramos el resultado.
                console.log("Propietario encontrado:", buscarPropietario(emailBusqueda));
                break;
            case 5:
                // Solicitamos los ids de la mascota a adoptar y del propietario.
                const idMascotaAdoptar = parseInt(prompt("ID de la mascota a adoptar: "));
                const idPropietarioAdoptar = parseInt(prompt("ID del propietario: "));
                // Llamamos a la función adoptarMascota con los datos proporcionados.
                adoptarMascota(idMascotaAdoptar, idPropietarioAdoptar);
                break;
            case 6:
                // Solicitamos los ids de la mascota a devolver y del propietario.
                const idMascotaDevolver = parseInt(prompt("ID de la mascota a devolver: "));
                const idPropietarioDevolver = parseInt(prompt("ID del propietario: "));
                // Llamamos a la función devolverMascota con los datos proporcionados.
                devolverMascota(idMascotaDevolver, idPropietarioDevolver);
                break;
            case 7:
                // Si el usuario selecciona la opción 7, salimos del bucle y terminamos el programa.
                console.log("Saliendo del sistema... Gracias por su visita!");
                return;
            default:
                // Si el usuario selecciona una opción no válida, mostramos un mensaje de error.
                console.log("Opción no válida.");
        }
    }
}

// Llamamos a la función menuPrincipal para iniciar el programa.
menuPrincipal();
