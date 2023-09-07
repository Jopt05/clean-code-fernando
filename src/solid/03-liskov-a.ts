import { Tesla, Audi, Toyota, Honda, Vehiculo, Ford } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehiculo[] ) => {

        cars.forEach( car => {
            // Obtener nombre del constructor
            console.log( car.constructor.name, car.getNumberOfSeats() )
        } )
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Ford(4)
    ];


    printCarSeats( cars );

})();