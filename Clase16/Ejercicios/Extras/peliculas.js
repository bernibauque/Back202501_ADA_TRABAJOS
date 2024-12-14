const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

// Paso 1: Encontrar la película más corta.
const shortestMovie = movies.reduce((shortest, movie) =>
    movie.duration < shortest.duration ? movie : shortest, movies[0]);

// Paso 2: Filtrar las películas con títulos de más de 10 caracteres.
const longTitleMovies = movies.filter(movie => movie.title.length > 10 && movie !== shortestMovie);

// Paso 3: Transformar los títulos largos a minúsculas.
const longTitlesLowercase = longTitleMovies.map(movie => movie.title.toLowerCase());

console.log(`La película más corta es: ${shortestMovie.title}`);
console.log(`Títulos largos en minúsculas: ${longTitlesLowercase}`);
// Resultado:
// La película más corta es: Toy Story
// Títulos largos en minúsculas: ['el señor de los anillos', 'inception']
