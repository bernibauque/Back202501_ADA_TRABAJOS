/*Ejercicio 2 – Encapsulamiento y Validaciones
Consigna: Crea una clase Persona con una propiedad privada _edad. 
Usa un getter y un setter para controlar la edad: Solo acepta valores 
entre 0 y 120. Si no cumple, muestra un error.*/

export class Persona {
    private _edad: number

    constructor(edadInicial: number) {
        this._edad = edadInicial
    }

    // getter: leer
    public get edad(): number {
        return this._edad
    }

    // setter: modificar
    public set edad(nuevaEdad: number) {
        if(nuevaEdad >= 0 && nuevaEdad <= 120) {
            this._edad = nuevaEdad // edad valida se actualiza 
        } else {
            console.log("Edad invalida");
        }
    }
}

// uso de la clase
// leer la edad (get)
const persona = new Persona(25)
console.log("Edad actual: ", persona.edad);

// seter valido y actualice la edad
persona.edad = 30
console.log("Nueva edad: ", persona.edad);

persona.edad = 150 
console.log("Edad despues de los 120: ", persona.edad);
