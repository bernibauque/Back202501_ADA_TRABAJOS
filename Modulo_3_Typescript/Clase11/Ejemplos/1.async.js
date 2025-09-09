// funcion asincrona
async function saludo() {
    return 'Hola chicas!'
}

// llamamos a la funcion y manejamos la promesa resultante
// .then 
// Si saludo se resuelve, se imprime un mensaje en la consola
saludo().then((mensaje) => console.log(mensaje))