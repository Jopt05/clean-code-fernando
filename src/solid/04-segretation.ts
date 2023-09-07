
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    fly() {}
    eat() {}

}

class Hummingbird implements Bird, FlyingBird {

    fly() {}
    eat() {}

}

class Ostrich implements Bird, RunningBird {

    eat() {}
    run() {}

}

class Penguin implements Bird, SwimmerBird {

    eat() {}
    swim() {}

}
