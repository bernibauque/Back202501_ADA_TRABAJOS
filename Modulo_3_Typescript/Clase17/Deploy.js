// app.js

// Paso 1: Requerir las dependencias necesarias

// 'dotenv' es un paquete que carga variables de entorno desde un archivo '.env'
// Esto es importante para mantener datos sensibles (como claves API, puertos, etc.) fuera del código fuente.
require('dotenv').config(); // Cargar las variables de entorno del archivo '.env'

// 'express' es el framework que vamos a usar para crear nuestro servidor web en Node.js
const express = require('express');
const app = express(); // Creamos una instancia de Express para manejar las solicitudes HTTP

// Paso 2: Configurar el puerto
// En producción, Heroku asigna un puerto dinámico a la aplicación, por eso usamos 'process.env.PORT'
// En desarrollo, usaremos el puerto 3000 si no se ha definido otro en las variables de entorno.

const port = process.env.PORT || 3000; // 'process.env.PORT' se usa para obtener el puerto en Heroku, sino usamos el puerto 3000 localmente

// Paso 3: Definir las rutas

// Usamos 'app.get' para definir una ruta HTTP GET en la raíz de la aplicación ('/')
// Esto significa que cuando los usuarios accedan a 'http://localhost:3000', se les enviará la respuesta '¡Hola desde Node.js en Heroku!'.

app.get('/', (req, res) => {
  res.send('¡Hola desde Node.js con variables de entorno en Heroku!'); // Enviamos una respuesta de texto al cliente
});

// Paso 4: Configuración para iniciar el servidor

// Usamos 'app.listen' para hacer que la aplicación escuche en el puerto que hemos configurado
// 'app.listen' toma dos parámetros: el puerto y una función de callback que se ejecutará cuando el servidor esté corriendo.

app.listen(port, () => {
  // Este mensaje aparecerá en la terminal cuando el servidor esté en funcionamiento
  console.log(`Servidor escuchando en el puerto ${port}`);
});

