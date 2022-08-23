'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make + ' going at', this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make + ' going at', this.speed);
};

const bmw = new Car('BMW', 115);
const mercedes = new Car('Mercedes', 90);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
