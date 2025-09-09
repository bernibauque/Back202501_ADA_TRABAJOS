let libro1 = {
    titulo: "Como hacer que te pasen cosas buenas",
    autor: "Marian Rojas Estapé",
    anioPublicacion: 2023,
}
let libro2 = {
    titulo: "Un mundo feliz",
    autor: "Aldous Huxley",
    anioPublicacion: 1932,
}
let libros = [];
function mostrarLibro() {
    libros.push(libro1);
    libros.push(libro2);
    return libros
};
console.log(mostrarLibro());