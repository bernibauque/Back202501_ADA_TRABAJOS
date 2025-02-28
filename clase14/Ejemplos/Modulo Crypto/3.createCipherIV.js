const crypto = require('crypto')

const algoritmo = 'aes-256-cbc' // algoritmo de cifrado AES con un tamano de 256 bits 
const key = crypto.randomBytes(32) // genera una clave de 265(bits) 32 bytes
const iv = crypto.randomBytes(16) // genera un vector de inicializacion de 16 bytes

// creamos el objeto cipher 
const cipher = crypto.createCipheriv(algoritmo, key, iv)

// datos a autenticar
const data = 'mensaje secreto'

// ciframos los datos
let encriptado = cipher.update(data, 'utf8', 'hex')
// procesa el texto plano y lo cifra
encriptado += cipher.final('hex') // finaliza el cifrado

console.log('Texto cifrado: ', encriptado);

// crear objeto decipher 
const decipher = crypto.createDecipheriv(algoritmo, key, iv)

// deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf8')
decifrado += decipher.final('utf-8')

console.log('Texto decifrado: ', decifrado);
