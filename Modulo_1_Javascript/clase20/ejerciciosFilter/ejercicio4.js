const playlist = [
    'Smells Like Teen Spirit',
    'Everlong',
    'Come As You Are',
    'The Pretender',
    'Heart-Shaped Box',
    'Learn to Fly',
    'Lithium'
];
const playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are'];

const playlistSinEscuchar = playlist.filter(cancion => !playlistEscuchada.includes(cancion));

console.log(playlistSinEscuchar);
// Debería mostrar: [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
