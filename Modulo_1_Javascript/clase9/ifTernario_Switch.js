// If Ternario

let fruta = 'Manzana'

let resultado = fruta == 'Manzana' ? 'Buenisimo, me gustan las manzanas' : 'Uf, queria manzana';

console.log(resultado);

// Switch

let semaforo = 'Apagado';

switch (semaforo) {
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Precaucion, cruzar con cautela')
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;
    default:
        console.log('No anda el semaforo');
        break;
}