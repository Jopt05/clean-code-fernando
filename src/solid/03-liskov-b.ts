
export abstract class Vehiculo {
    // Trabaja con herencia
    // En este caso lo que buscamos es que las subclases tengan todos
    // los metodos de la clase abstracta

    getNumberOfSeats(): number {
        throw Error('Method not implemented');
    }

    // abstract getNumberOfSeats(): number;

}

export class Tesla extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehiculo {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}