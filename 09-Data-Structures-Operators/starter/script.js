'use strict';

// Data needed for a later exercise

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
};
/*
const airline = 'TAP Air Portugal';

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);
*/

/*
const capitalizeName = function (name) {
  const names = name.split(' ');
  let correctName = '';
  for (const n of names) {
    correctName += n[0].toUpperCase() + n.slice(1) + ' ';
  }

  console.log(correctName);
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '*').padEnd(30, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str.slice(-3));
};

maskCreditCard(765123023);
maskCreditCard('1232345982736459812364');
maskCreditCard(98726318);


//Repeat

console.log('wtf'.repeat(4));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'A'.repeat(n)}`);
};

planesInLine(4);

console.log(airline.slice(4, 7));
console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log('This is Middle Seat')
    : console.log('This is not Middle Seat');
  };
  
  checkMiddleSeat('11B');
  checkMiddleSeat('23C');
  checkMiddleSeat('3E');
  
  console.log(new String('jonas'));
  console.log(typeof new String('jonas').slice(1));
  
  
  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());
  
  const correctName = function (name) {
    const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  return nameCorrect;
};

console.log(correctName('JoNaS'));

// Check emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = email.toLowerCase().trim();
console.log(normalizedEmail);
console.log(trimmedEmail);

console.log(normalizedEmail === email);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcement =
'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement);
console.log(announcement.replaceAll('door', 'gate'));

//Booleans
const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));
//

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus Family');
}

//Practice Exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  const isNotSafe = baggage.includes('knife') || baggage.includes('gun');

  if (!isNotSafe) {
    console.log('Welcome Aboard!');
  } else {
    console.log('Sorry! You are not allowed to come in ');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('GOt some snacks and a gun for proctection');

*/
