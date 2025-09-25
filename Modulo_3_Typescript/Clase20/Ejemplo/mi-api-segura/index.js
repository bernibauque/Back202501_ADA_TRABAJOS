// Paso 1: Importaciones
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { z } = require('zod')
require('dotenv').config()

// Paso 2: Instancia de express
const app = express()
app.use(cors()) // permite acceder a otros origenes
app.use(express.json()) // leemos los json en request

// Middleware para registrar todas las solicitudes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
})

// Datos simulados
const user = { email: 'ada@lovelace.com', password: '1234' }
const productos = []

// Middleware para proteger las rutas con JWT
function auth(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ error: 'Token requerido' })

    const token = authHeader.split(' ')[1] // divide y toma la segunda parte
    if (!token) return res.status(401).json({ error: 'Token requerido' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch {
        res.status(403).json({ error: 'Token invalido' })
    }
}

// Esquema zod: Para validar los productos
const productoSchema = z.object({
    name: z.string().min(2),
    price: z.number().positive()
})

// Ruta publica de login
app.post('/login', (req, res) => {
    const { email, password } = req.body
    if (email === user.email && password === user.password) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token })
    } else {
        res.status(401).json({ error: 'Credenciales invalidas' })
    }
})

// Ruta protegida para obtener productos
app.get('/productos', auth, (req, res) => {
    res.json(productos)
})

// Ruta protegida para crear productos
app.post('/productos', auth, (req, res) => {
    try {
        const nuevoProducto = productoSchema.parse(req.body) // valida con zod
        productos.push(nuevoProducto)
        res.status(201).json(nuevoProducto)
    } catch (err) {
        res.status(400).json({ error: err.errors })
    }
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})