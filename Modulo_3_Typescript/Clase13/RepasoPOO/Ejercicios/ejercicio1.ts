/*Ejercicio 1 – Encapsulamiento con Getter y Setter
Consigna: Crea una clase CuentaBancaria con una propiedad privada _saldo. 
Implementa un getter para consultar el saldo y un setter para depositar 
dinero (no puede ser un valor negativo). */

export class CuentaBancaria {
    private _saldo: number;

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial // inicializamos el saldo con el valor recibido
    }

    // getter: permite leer el saldo desde fuera de la clase
    public get saldo(): number {
        return this._saldo
    }

    // setter: permite modificar el saldo con una validacion
    public set saldo(monto: number) {
        if (monto >= 0) {
            this._saldo += monto // si el monto es positivo, lo sumamos a saldo
        } else {
            console.log("No se puede depositar un monto negativo");
        }
    }
}

// uso de la clase
const cuenta = new CuentaBancaria(1000)
console.log("Saldo inicial: ", cuenta.saldo); // leer saldo = 1000

// usar settes para depositar 500
cuenta.saldo = 500
console.log("Saldo despues de depositar: ", cuenta.saldo);

// Intentar desposito en negativo
cuenta.saldo = -200
console.log("Saldo despues de depositar en negativo: ", cuenta.saldo);

