const crypto = require('crypto')

// datos a autenticar
const data = 'mensaje secreto'

//clave secreta para hmac
const secretKey = 'mi_clave_secreta'

// creacion de un obj hmac usando un algoritmo sha256
const hmac = crypto.createHmac('sha256', secretKey)

// actualizamos el hmac con los datos
hmac.update(data)

// obtener el hmac en formato hexadecimal
const hmacOutPut = hmac.digest('hex')

// leermos el hmac generado
console.log('HMAC de sha256:', hmacOutPut);
