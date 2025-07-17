// importamos el modulo
const fs = require('fs')

// Funcion para leer el archivo de contactos
function leerContactos() {
    if (fs.existsSync('contactos.json')) {
        const data = fs.readFileSync('contactos.json', 'utf-8')
        return JSON.parse(data)
    }
    return [] // si no existe el archivo, devolvemos una lista vacia
}

// Funcion para guardar contactos en el archivo
function guardarContactos(contactos) {
    fs.writeFileSync('contactos.json', JSON.stringify(contactos, null, 2))
}

// Agregar un contacto 
function agregarContacto(nombre, telefono, email) {
    const contactos = leerContactos()

    // verificamos si ya existe un contacto con ese nombre
    if (contactos.some(contacto => contacto.nombre === nombre)) {
        console.log(`El contacto "${nombre}" ya existe.`);
    }

    contactos.push({ nombre, telefono, email })
    guardarContactos(contactos)
    console.log(`Contacto "${nombre}" agregado exitosamente.`);
}

// Listar todos los contactos
function listarContactos() {
    const contactos = leerContactos()
    console.log("Lista de Contactos: ");
    console.table(contactos)
}

// Buscar un contacto
function buscarContacto(nombre) {
    const contactos = leerContactos()
    const contacto = contactos.find(c => c.nombre === nombre)

    if (contacto) {
        console.log("Contacto encontrados: ", contacto);
    } else {
        console.log(`No se encontro ningun contacto con el nombre "${nombre}"`);
    }
}

// Pruebas
agregarContacto("Berni", "1233445678", "bernikpa@gmail.com")
agregarContacto("Sofi", "1233445678", "Sofikpa@gmail.com")
listarContactos()
buscarContacto("Berni")
