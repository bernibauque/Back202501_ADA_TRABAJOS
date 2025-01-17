const fs = require('fs') // PASO 1: importamos el modulo

// PASO 2: configuramos una variable de nombre datos que contiene los datos a persistir
datos = "Ejemplo de datos que podemos escribir en un archivo"

// PASO 3: Utilizamos el modulo fs 'writeFile' que no permita escribir datos en un archivo
// 1. WF crea el archivo por nosotras, el nombre de dicho archivo lo pasamos como primer parametro
// 2. Segundo parametro es doonde guardamos los datos, en este caso es una variable
// 3. Tercer parametro hace referencia a que hacer si ocurre un error. En el caso de error, va a dar lugar a que se lance el error con un mensaje determinado

fs.writeFile('archivo.txt', datos, function (err) {
    //if (!err) {
    console.log('Los datos han sido escritos a archivo.txt');
    //} else {
    //    throw err
    // }
})

// PASO 4 / EXTRAS:
// Errores: En este tipo de archivos tienen que ver principalmente con
// intentar escribir en un archivo dentro de un directorio en el cual no
// tenemos acceso/permisos para escribir

// Donde se guarda el archivo: El archivo se va a guardar exactamente en
// el mismo lugar donde se encuentre el script que lo ejecuta . en este caso
// este archivo si quisieramos que se guardara en otro ruta, tenemos que
// indicar antes de nombre 'archivo.txt' (la ruta completa)

// throw: se utiliza para lanzar una excepcion que es una forma de manejar
// errores o situaciones excepcionales en el codigo. Cuando se usa el throw
// podemos detener la ejecucion normal del codigo y transferir el control a
// un bloque de codigo que maneje el error, normalmente es un bloque try catch