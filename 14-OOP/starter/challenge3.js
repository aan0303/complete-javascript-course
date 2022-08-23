'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this.charge;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed * 0.01 + this.speed;
  return `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`;
};

const tesla = new EV('Tesla', 140, 22);
// console.log(tesla.chargeBattery(10));
console.log(tesla.accelerate());
