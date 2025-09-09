const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.'
];

const soloStrings = mix.filter(elemento => typeof elemento === 'string');

console.log(soloStrings);
// Debería mostrar: [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]


