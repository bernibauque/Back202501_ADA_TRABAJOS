let razaDePerros = ["Labrador", "BullDog", "Beagle", "Pug"]
console.log("Array Inicial: ", razaDePerros);

// 1. Metodo Push: Agrega uno o mas elementos al final del array
razaDePerros.push("Husky")
console.log("Array despues de push ('Husky')", razaDePerros)

// 2. Metodo Pop: Elimina el ultimo elemento del array y lo retorna
let razaEliminada = razaDePerros.pop()
console.log("Array despues de pop", razaDePerros)
console.log("Raza eliminada con pop", razaEliminada)

// 3. Metodo Shift: Elimina el primer elemento del array y lo devuelve
let primeraRaza = razaDePerros.shift()
console.log("Array despues de shift", razaDePerros)
console.log("Raza eliminada con shift", primeraRaza)

// 4. Metodo unshift: Agrega uno o mas elementos al inicio del array
razaDePerros.unshift("Chihuahua")
console.log("Array despues de unshift ('Chihuahua')", razaDePerros);

// 5. Metodo Join: Une todos los elementos del array en un string, separados por un delimitador (opcional)
let razaEnString = razaDePerros.join(" - ")
console.log("Array unido con join (' - ')", razaEnString);

// 6. Metodo IndexOf: Devuelve el primer indice donde se encuentra el elemento (o devuelve -1 si no esta)
let indiceBeagle = razaDePerros.indexOf("Beagle")
console.log("Indice de 'Beagle' con IndeOf:", indiceBeagle);
let indicePastorAleman = razaDePerros.indexOf("Pastor Aleman")
console.log("Indice de 'Pastor Aleman' con IndeOf:", indicePastorAleman);

// 7. Metodo LastIndexOf: Devuelve el ultimo indice donde se encuentra el elemento (o devuelve -1 si no esta)
let razaDuplicada = ["Bulldog", "Beagle", "Pug", "Beagle", "Dalmata"]
console.log("Array con duplicados (lastIndexOf)", razaDuplicada);
let ultimoIndice = razaDuplicada.lastIndexOf("Beagle")
console.log("Ultimo indice de 'Beagle' con lastIndexOf", ultimoIndice);

// 8. Metodo Includes: Devuelve true si esta el elemento y false si no esta
let tienePug = razaDePerros.includes("Pug")
console.log("El array contine Pug?", tienePug);
let NotieneCaniche = razaDePerros.includes("Caniche")
console.log("El array contine Caniche?", NotieneCaniche);





