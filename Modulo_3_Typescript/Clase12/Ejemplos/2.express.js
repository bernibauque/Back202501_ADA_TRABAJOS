// importamos express
const express = require('express')

// creamos la instancia de express
const app = express()

// Definimos el puerto
const PORT = 3000

// RUTAS
app.get('/', (req, res) => {
    res.send('Hola, alumnas de ADA! Bienvenidas al servidor de express')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})