const express = require('express');
const app = express();

// Configuramos una ruta simple
app.get('/', (req, res) => {
    res.json({ mensaje: '¡Hola desde Node.js en Vercel!' });
});

// Exportamos la función handler para Vercel
module.exports = app;

// Si estás ejecutando localmente con Node.js
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}
