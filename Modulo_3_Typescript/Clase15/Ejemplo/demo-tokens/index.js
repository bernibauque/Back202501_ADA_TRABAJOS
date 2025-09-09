const jwt = require('jsonwebtoken') // Importacion
const express = require('express') // Importacion

const app = express() //instancia de express
const PORT = 3000

const SECRET_KEY = 'miclavesecreta'

// Middleware de verificacion
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // si existe el encabezado, extrae eltoken

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' })
    }

    // decodificar 
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded // se agrega la info del usuario al objeto de la soli
        next()
    } catch (err) {
        res.status(401).json({ message: 'token invalido o expirado' })
    }
}

// Ruta para generar un token
app.get('/login', (req, res) => {
    // informacion del usuario
    const user = {
        id: 1,
        name: 'Berni Bauque',
        email: 'berni@gmail.com',
        role: 'admin'
    }

    // creacion del token
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' })

    res.json({
        message: 'Inicio de sesion exitoso',
        token: token
    })
})

// ruta protegida 
app.get('/protected', verifyToken, (req, res) => {
    res.json({
        message: 'Acceso a ruta protegida concedido',
        user: req.user
    })
})

// inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
