'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this.speed;
  }

  brake() {
    this.speed -= 5;
    return this.speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.brake();
ford.brake();
ford.brake();

console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
