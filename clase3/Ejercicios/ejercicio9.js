const fs = require('fs');
const filePath = './eventos.json'; // Archivo donde se almacenarán los eventos

// Función para leer los eventos desde el archivo
const leerEventos = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de eventos
};

// Función para escribir los eventos en el archivo
const escribirEventos = (eventos) => {
    fs.writeFileSync(filePath, JSON.stringify(eventos, null, 2)); // Escribimos los eventos en el archivo
};

// Agregar un evento
const agregarEvento = (nombre, fecha, lugar) => {
    const eventos = leerEventos(); // Leemos los eventos existentes
    eventos.push({ id: eventos.length + 1, nombre, fecha, lugar }); // Agregamos el nuevo evento
    escribirEventos(eventos); // Guardamos la lista actualizada
    console.log(`Evento agregado: ${nombre}, fecha: ${fecha}, lugar: ${lugar}`);
};

// Listar los eventos
const listarEventos = () => {
    const eventos = leerEventos(); // Leemos los eventos
    console.log('Lista de eventos:');
    eventos.forEach(evento => {
        console.log(`${evento.id}. ${evento.nombre} - Fecha: ${evento.fecha}, Lugar: ${evento.lugar}`);
    });
};

// Eliminar un evento
const eliminarEvento = (idEvento) => {
    let eventos = leerEventos(); // Leemos los eventos
    eventos = eventos.filter(evento => evento.id !== idEvento); // Filtramos para eliminar el evento por ID
    escribirEventos(eventos); // Guardamos la lista actualizada
    console.log('Evento eliminado.');
};

// Ejemplo de uso de las funciones
agregarEvento('Concierto de Rock', '2025-02-15', 'Estadio Nacional');
listarEventos();
eliminarEvento(1);
listarEventos();
