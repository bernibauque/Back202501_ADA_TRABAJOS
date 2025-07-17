const fs = require('fs');
const filePath = './series.json'; // Archivo donde se almacenarán las series

// Función para leer las series desde el archivo
const leerSeries = () => {
    // Si el archivo no existe, creamos un archivo vacío con un arreglo
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8'); // Leemos el archivo
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de series
};

// Función para escribir las series en el archivo
const escribirSeries = (series) => {
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2)); // Escribimos las series en el archivo
};

// Agregar una nueva serie
const agregarSerie = (nombreSerie, temporadas) => {
    const series = leerSeries(); // Leemos las series existentes
    series.push({ id: series.length + 1, nombre: nombreSerie, temporadas: parseInt(temporadas) }); // Agregamos la nueva serie
    escribirSeries(series); // Guardamos la lista actualizada
    console.log(`Serie agregada: ${nombreSerie}, temporadas: ${temporadas}`);
};

// Listar las series
const listarSeries = () => {
    const series = leerSeries(); // Leemos las series
    console.log('Lista de series favoritas:');
    series.forEach(serie => {
        console.log(`${serie.id}. ${serie.nombre} - ${serie.temporadas} temporadas`);
    });
};

// Actualizar la cantidad de temporadas de una serie
const actualizarSerie = (idSerie, nuevasTemporadas) => {
    const series = leerSeries(); // Leemos las series
    const serie = series.find(s => s.id === idSerie); // Buscamos la serie por su id
    if (serie) {
        serie.temporadas = parseInt(nuevasTemporadas); // Actualizamos las temporadas
        escribirSeries(series); // Guardamos la lista actualizada
        console.log(`Serie actualizada: ${serie.nombre}, nuevas temporadas: ${serie.temporadas}`);
    } else {
        console.log('Serie no encontrada.');
    }
};

// Ejemplo de uso de las funciones
agregarSerie('Breaking Bad', 5);
listarSeries();
actualizarSerie(1, 6);
listarSeries();

