class Coche {
    constructor(color) {
        this.color = color;
    }
    toString() {
        return `${this.color}`;
    }
}
const blueCar = new Coche('blue');
console.log(blueCar.toString());


class Coche {
    static defaultSpeed() {
        return 10;
    }
}
const speed = Coche.defaultSpeed();


class Coche {
    get color() {
        console.log('get color');
        return this._color;
    }
    set color(newColor) {
        console.log(`set color ${newColor}`);
        this._color = newColor;
    }
}
const car = new Coche();
car.color = 'red';


class Vehiculo {
    speed() {
        return 10;
    }
}
class Coche extends Vehiculo {}


class Vehiculo {
    constructor(speed) {
        this.speed = speed;
    }
}
class Coche extends Vehiculo {
    constructor(speed, color) {
        super(speed);
        this.color = color;
    }
}
const car = new Coche(20, 'blue');
console.log(car.speed);