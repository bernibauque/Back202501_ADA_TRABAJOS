const prompt = require('prompt-sync')();

// Estructura de Datos
const mascotas = [
    { id: 1, nombre: "Rex", especie: "Perro", edad: 5, disponible: true },
    { id: 2, nombre: "Miau", especie: "Gato", edad: 3, disponible: true },
    { id: 3, nombre: "Nube", especie: "Conejo", edad: 2, disponible: true },
    { id: 4, nombre: "Sombra", especie: "Gato", edad: 4, disponible: true },
    { id: 5, nombre: "Coco", especie: "Perro", edad: 7, disponible: true }
];

const propietarios = [
    { id: 1, nombre: "Ana Pérez", email: "ana.perez@email.com", mascotasAdoptadas: [] },
    { id: 2, nombre: "Luis García", email: "luis.garcia@email.com", mascotasAdoptadas: [] },
    { id: 3, nombre: "María López", email: "maria.lopez@email.com", mascotasAdoptadas: [] }
];

// Funciones de Gestión de Mascotas
function agregarMascota(id, nombre, especie, edad) {
    mascotas.push({ id, nombre, especie, edad, disponible: true });
    console.log(`Mascota "${nombre}" agregada con éxito.`);
}

function buscarMascota(criterio, valor) {
    return mascotas.filter(mascota => mascota[criterio] && mascota[criterio].toLowerCase().includes(valor.toLowerCase()));
}

// Gestión de Propietarios
function registrarPropietario(nombre, email) {
    const id = propietarios.length + 1;
    propietarios.push({ id, nombre, email, mascotasAdoptadas: [] });
    console.log(`Propietario ${nombre} registrado con éxito.`);
}

function buscarPropietario(email) {
    return propietarios.find(propietario => propietario.email.toLowerCase() === email.toLowerCase());
}

// Sistema de Adopciones
function adoptarMascota(idMascota, idPropietario) {
    const mascota = mascotas.find(m => m.id === idMascota);
    const propietario = propietarios.find(p => p.id === idPropietario);

    if (mascota && propietario && mascota.disponible) {
        mascota.disponible = false;
        propietario.mascotasAdoptadas.push(idMascota);
        console.log(`Mascota "${mascota.nombre}" adoptada por ${propietario.nombre}.`);
        return true;
    }
    console.log("No se pudo realizar la adopción.");
    return false;
}

function devolverMascota(idMascota, idPropietario) {
    const mascota = mascotas.find(m => m.id === idMascota);
    const propietario = propietarios.find(p => p.id === idPropietario);

    if (mascota && propietario && !mascota.disponible) {
        mascota.disponible = true;
        propietario.mascotasAdoptadas = propietario.mascotasAdoptadas.filter(id => id !== idMascota);
        console.log(`Mascota "${mascota.nombre}" devuelta por ${propietario.nombre}.`);
        return true;
    }
    console.log("No se pudo realizar la devolución.");
    return false;
}

// Interfaz de Usuario por Consola
function menuPrincipal() {
    while (true) {
        console.log("\nBienvenido a nuestra Veterinaria!");
        console.log("\nMenú Principal:");
        console.log("1. Agregar mascota");
        console.log("2. Buscar mascota");
        console.log("3. Registrar propietario");
        console.log("4. Buscar propietario");
        console.log("5. Adoptar mascota");
        console.log("6. Devolver mascota");
        console.log("7. Salir");

        const opcion = parseInt(prompt("\nSelecciona una opción: "));

        switch (opcion) {
            case 1:
                const idMascota = parseInt(prompt("ID de la mascota: "));
                const nombreMascota = prompt("Nombre de la mascota: ");
                const especie = prompt("Especie de la mascota: ");
                const edad = parseInt(prompt("Edad de la mascota: "));
                agregarMascota(idMascota, nombreMascota, especie, edad);
                break;
            case 2:
                const criterio = prompt("Buscar mascota por nombre o especie (colocar una de estas palabras): ");
                const valor = prompt("Introducir el nombre o especie de la mascota: ");
                console.log("Resultados de búsqueda:", buscarMascota(criterio, valor));
                break;
            case 3:
                const nombrePropietario = prompt("Nombre del propietario: ");
                const email = prompt("Email del propietario: ");
                registrarPropietario(nombrePropietario, email);
                break;
            case 4:
                const emailBusqueda = prompt("Email del propietario a buscar: ");
                console.log("Propietario encontrado:", buscarPropietario(emailBusqueda));
                break;
            case 5:
                const idMascotaAdoptar = parseInt(prompt("ID de la mascota a adoptar: "));
                const idPropietarioAdoptar = parseInt(prompt("ID del propietario: "));
                adoptarMascota(idMascotaAdoptar, idPropietarioAdoptar);
                break;
            case 6:
                const idMascotaDevolver = parseInt(prompt("ID de la mascota a devolver: "));
                const idPropietarioDevolver = parseInt(prompt("ID del propietario: "));
                devolverMascota(idMascotaDevolver, idPropietarioDevolver);
                break;
            case 7:
                console.log("Saliendo del sistema... Gracias por su visita!");
                return;
            default:
                console.log("Opción no válida.");
        }
    }
}

menuPrincipal();
