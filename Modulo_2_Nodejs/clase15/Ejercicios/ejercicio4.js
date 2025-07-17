const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Ruta al archivo JSON
const rutaUsuarios = path.join(__dirname, 'usuarios.json');

// Función para cargar usuarios
function cargarUsuarios() {
    try {
        const datos = fs.readFileSync(rutaUsuarios, 'utf-8');
        return JSON.parse(datos);
    } catch (error) {
        return [];
    }
}

// Función para guardar usuarios
function guardarUsuarios(usuarios) {
    fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));
}

// Registrar un nuevo usuario
function registrarUsuario(nombre, email, contraseña) {
    const usuarios = cargarUsuarios();
    const id = uuidv4(); // Generar ID único
    const nuevoUsuario = { id, nombre, email, contraseña };
    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);
    console.log('Usuario registrado con ID:', id);
}

// Iniciar sesión
function iniciarSesion(email, contraseña) {
    const usuarios = cargarUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.contraseña === contraseña);
    if (usuario) {
        console.log('Inicio de sesión exitoso. Bienvenido,', usuario.nombre);
    } else {
        console.log('Credenciales incorrectas.');
    }
}

// Ejemplo de uso
registrarUsuario('Ana', 'ana@example.com', '1234');
iniciarSesion('ana@example.com', '1234');
