'use strict';

// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));
// console.log(Number.parseFloat('0.2hi'));

// console.log(Number.isFinite(20 / 0));

// //Checking if a value is a number using isFinite is the best thing to do

// console.log(Number.isFinite(+'20x'));
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.min(5, 1, 8, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// //Rounding Integers
// console.log(Math.trunc(23.3));
// console.log(Math.round(23.9));
// console.log(Math.round(23.45));
// console.log(Math.ceil(23.1));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(-23.3), Math.floor(-23.3));

// //Rounding Decimals

// console.log((2.72).toFixed(1));

// const arr = [1, 0, 0, 1];

// console.log(arr);

// const diameter = 2874600000000000;
// const priceCents = 345_99;
// console.log(priceCents);

// const PI = 3.1415;
// console.log(PI);

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(1482734691872364918723649873264n);
// console.log(BigInt(927345098273459087234058972340589734));

// console.log(10000n + 10000n);
// console.log(92834750928374590283457n * 839239n);
/*
const huge = 20928098039082n;
const num = 23;
console.log(huge > num);
// console.log(num * huge);
console.log(20n === 20);
console.log(20n === '20');

console.log(10n / 3n);
*/

//Create a date;

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

/*
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 00:00:00'));
console.log(new Date('December 24, 2015'));

*/
// account1.movementsDates.forEach(el => console.log(new Date(el)));
// console.log(new Date(2037, 11, 19, 15, 23));

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.toISOString());

// console.log(Date.now());
// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future));

// const days = (day1, day2) => (day2 - day1) / (1000 * 60 * 60 * 24);

// const days1 = days(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8));
// console.log(days1.toFixed(2));

// const milliseconds = 322668 * 1000;

// const now = new Date(milliseconds);
// let hour = `${now.getUTCHours()}`.padStart(2, 0);
// const min = `${now.getUTCMinutes()}`.padStart(2, 0);
// const sec = `${now.getUTCSeconds()}`.padStart(2, 0);

// if (milliseconds >= 86400000 && milliseconds < 359999000) {
//   const howMany24 = milliseconds / 86400000;
//   hour = Math.floor(24 * howMany24);
// } else if (milliseconds >= 359999000) {
//   hour = 99;
// }

// console.log(`${hour}:${min}:${sec}`);

// const num = 388764;
// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log(`US:`, new Intl.NumberFormat('en-US', options).format(num));
// console.log(`Germany:`, new Intl.NumberFormat('de-DE', options).format(num));
// console.log(`Syria:`, new Intl.NumberFormat('ar-SY', options).format(num));
// const ingredients = ['Spinnach', 'Olives'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//   10000,
//   ...ingredients
// );
// console.log('Waiting...');

// if (ingredients.includes('Spinnach')) clearTimeout(pizzaTimer);

setInterval(() => {
  console.log(
    Intl.DateTimeFormat(navigator.locale, { timeStyle: 'medium' }).format(
      new Date()
    )
  ),
    setTimeout(() => console.clear(), 1900);
}, 1000);
