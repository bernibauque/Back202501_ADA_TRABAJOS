const fs = require('fs');
const filePath = './contactos.json'; // Archivo donde se almacenarán los contactos

// Función para leer los contactos desde el archivo
const leerContactos = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de contactos
};

// Función para escribir los contactos en el archivo
const escribirContactos = (contactos) => {
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2)); // Escribimos los contactos en el archivo
};

// Agregar un contacto
const agregarContacto = (nombre, telefono, correo) => {
    const contactos = leerContactos(); // Leemos los contactos existentes
    contactos.push({ id: contactos.length + 1, nombre, telefono, correo }); // Agregamos el nuevo contacto
    escribirContactos(contactos); // Guardamos la lista actualizada
    console.log(`Contacto agregado: ${nombre}`);
};

// Listar los contactos
const listarContactos = () => {
    const contactos = leerContactos(); // Leemos los contactos
    console.log('Lista de contactos:');
    contactos.forEach(contacto => {
        console.log(`${contacto.id}. ${contacto.nombre} - Teléfono: ${contacto.telefono}, Correo: ${contacto.correo}`);
    });
};

// Eliminar un contacto
const eliminarContacto = (idContacto) => {
    let contactos = leerContactos(); // Leemos los contactos
    contactos = contactos.filter(contacto => contacto.id !== idContacto); // Filtramos para eliminar el contacto por ID
    escribirContactos(contactos); // Guardamos la lista actualizada
    console.log(`Contacto eliminado.`);
};

// Ejemplo de uso de las funciones
agregarContacto('Juan Pérez', '123-456-789', 'juan@correo.com');
listarContactos();
eliminarContacto(1);
listarContactos();
