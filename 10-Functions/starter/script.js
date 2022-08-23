'use strict';

/*
const bookingArr = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES 5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingArr.push(booking);
};

createBooking('LH123', 2);
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 231103160069,
};

const checkIn = function (flightNum, { ...passenger }) {
    flightNum = 'LH999';
    passenger.name = `Mr ` + passenger.name;
    console.log(passenger);
};

console.log(jonas); //Output: Object { name: "Jonas Schmedtmann", passport: 231103160069 }
checkIn(flight, jonas); //Output: Object { name: "Mr Jonas Schmedtmann", passport: 231103160069 }


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', oneWord);

const high5 = function () {
    console.log('hi');
};

//Call back functions allow us to make abstraction


const greet = function (greeting) {
  return function (name) {
      console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet('Hello');
greeterHey('Jonas');

greet('Hello')('Jonas');

//Challenge

const greet = greeting => name => console.log(`${greeting}, ${name}`);
greet('Yo')('smite');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
      console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
        flight: `${this.iataCode}${flightNum}`,
        name: this.airline,
    });
},
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;
book.call(euroWings, 853, 'Sarah Williams');

console.log(euroWings);
console.log(lufthansa);
console.log(swiss);

book.call(lufthansa, 239, 'Mary Cooper');

book.call(swiss, 100, 'Pierre');

//Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);




const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
};

const book = lufthansa.book;
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(700, 'Puerto');

const bookEW23 = book.bind(euroWings, 23);

bookEW23('Puteri');
bookEW23('Martha Cooper');

//With Event Listeners

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
  book(flightNum, passengerName) {
      console.log(
          `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
        flight: `${this.iataCode}${flightNum}`,
        name: this.airline,
    });
},
};

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    this.planes++;
    console.log(this.planes);
};

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//   Partial applications

const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTax = function (rate) {
  return function (value) {
      return value + rate * value;
    };
};

const addVAT = addTax(0.23);
console.log(addVAT(230));

// const runOnce = function () {
  //   console.log('This will never run again');
// };
// runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}
// console.log(isPrivate);
console.log(notPrivate);


const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

*/

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);
// g();
// f();
// h();
// f();

const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

console.dir(boardPassengers(180, 2));
