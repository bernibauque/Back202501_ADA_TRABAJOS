const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para generar el hash
function hashPasswordWithSalt(password, salt) {
    // Combina la contraseña con el "sal"
    const combined = password + salt;

    // Crea un hash utilizando SHA-256
    const hash = crypto.createHash('sha256');
    hash.update(combined);
    return hash.digest('hex');
}

// Solicita la contraseña al usuario
rl.question('Introduce tu contraseña: ', (password) => {
    // Solicita el "sal" al usuario
    rl.question('Introduce el "sal": ', (salt) => {
        // Genera el hash
        const hashedPassword = hashPasswordWithSalt(password, salt);

        // Muestra el hash
        console.log('Hash generado:', hashedPassword);

        // Cierra la interfaz de readline
        rl.close();
    });
});
