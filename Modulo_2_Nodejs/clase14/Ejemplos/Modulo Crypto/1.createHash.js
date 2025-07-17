const crypto = require('crypto')
// datos que queremos hashear
const data = 'Este es un mensaje secreto'

// creamos el objeto hash usando el algoritmo sha256
const hash = crypto.createHash('sha256')

//actualizar el hash con los datos
hash.update(data)

// obtener el hash en formato hexadecimal
const hashOutput = hash.digest('hex')

// mostrar el hash generado
console.log(' Hash de sha256: ', hashOutput);
