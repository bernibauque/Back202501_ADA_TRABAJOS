// Metodo de Strings
let mensaje = 'Gran dia para practicar Javascript!';

// Ejemplo de length: Contabiliza la cantidad de caracteres
console.log(mensaje.length); // 35

// Ejemplo de IndexOf: Me dice la posicion especifica
console.log(mensaje.indexOf('dia')); // 5
console.log(mensaje.indexOf('noche')); // -1 porque no esta
// Es sensible a los acentos y MAY

// Ejemplo Slice: Para hacer un recorte
console.log(mensaje.slice(0, 24)); // No modifica al msj original

// Ejemplo Trim: Elimina los espacios al principio y final
let mensaje2 = '     Gran dia para practicar Javascript!';
console.log(mensaje2.trim());

// Ejemplo Split: Convierte en array. No se ejecuta en variables sin valor
let mensaje3 = 'Gran dia para practicar Javascript!';
console.log(mensaje3.split()); // Imprime todo junto
console.log(mensaje3.split(" ")); // Imprime separado

// Ejemplo Replace: Para reemplazar cadenas de texto
let mensaje4 = 'Gran dia para practicar Javascript!';
console.log(mensaje4.replace('Javascript', 'lectura'));


