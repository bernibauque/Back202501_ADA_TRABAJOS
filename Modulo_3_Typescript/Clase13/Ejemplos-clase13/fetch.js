/*Descripción: Modificar la función para recibir un id como parámetro y así 
hacer la función reutilizable para distintos personajes.Solicitar datos de 
diferentes personajes de la API de Rick y Morty pasando un id como argumento.
Crear una función fetchCharacter(id).
Validar el id y lanzar un error si no es válido.*/

async function fetchCharacter(id) {
    try {
        // validamos el id
        if (!id) throw new Error('No se ingreso ID')

        // hacemos una solicitud a la api con el id
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        // verificamos que la respuesta sea exitosa o no
        if (!response.ok) throw new Error(`El personaje no se encontro ${response.status}`)

        // convertimos la respuesta en formato json
        const personaje = await response.json()

        console.log('Info del personaje: ', personaje);
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

fetchCharacter(1)