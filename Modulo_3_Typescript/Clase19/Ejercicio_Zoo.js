// Importaciones 
const express = require('express')

// Instancia de la aplicacion
const app = express()

// Middleware para analizar el cuerpo de la soli en formato json
app.use(express.json())

// base de datos
let animals = [
    { id: 1, name: 'Leon', species: 'Felino' },
    { id: 2, name: 'Elefante', species: 'Mamifero' },
    { id: 3, name: 'Delfin', species: 'Mamifero' },
]

// Middleware para registrar cada una de la soli en la consola
const requestLogger = (req, res, next) => {
    console.log(`Solicitud:  ${req.method} ${req.url}`);
    next()
}

// aplicamos el middleware globalmente 
app.use(requestLogger)

// Middleware para validar los datos de los animales en las soli POST Y PUT
const validateAnimal = (req, res, next) => {
    const { name, species } = req.body // extrae los datos 
    if (!name || !species) {
        return res.status(400).json({ error: "Los campos name y species son obligatorios." })
    }
    next()
}

// RUTAS

// 1. Obtener todos los animales (GET)
app.get('/api/animals', (req, res) => {
    res.status(200).json(animals)
})

// 2. Crear un animal (POST)
app.post('/api/animals', (req, res) => {
    const { name, species } = req.body // extrae lo datos de la solicitud
    const newAnimal = { id: animals.length + 1, name, species } // creamos un nuevo objeto con un id unico
    animals.push(newAnimal)
    res.status(201).json(newAnimal)
})

// 3. Actualizar un animal (PUT)
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const { id } = req.params // obtener los datos del id del animal de los parametros de la url
    const { name, species } = req.body // extrae lo datos de la solicitud
    const animal = animals.find(a => a.id === parseInt(id)) // Busca al animal por su id
    if (!animal) {
        return res.status(404).json({ error: 'Animal no encontrado' })
    }
    // Actualizamos el animal encontrado
    animal.name = name
    animal.species = species
    res.status(200).json(animal)
})

// 4. Borrar un animal (DELETE)
app.delete('/api/animals/:id', (req, res) => {
    const { id } = req.params // obtener los datos del id del animal de los parametros de la url
    animals = animals.filter(a => a.id !== parseInt(id)) // elimina el animal de la base de datos
    res.status(204).send()
})

// Iniciamos el servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
