/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1));
// console.log(arr.slice(1, -2));

//Figuring out wtf is shallow copy again
// const x = arr.slice();
// x[2].aan = 'goku';
// console.log(arr, x);

// console.log(arr.splice(1));
// console.log(arr);

// console.log(arr.splice(-1));
console.log(arr);
console.log(arr.slice(0, 3));

arr.splice(1, 4);
console.log(arr);

//REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);

console.log(arr[0]);
console.log(arr.at(-1));
console.log(arr);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const x of movements) {
//   if (x > 0) {
//     console.log('Up ka ching');
//   } else {
//     console.log("You're going bankrupt");
//   }
// }

//continue and break statement is not functional in forEach loop
movements.forEach(function (movements, index, array) {
  if (movements > 0) {
    console.log(`Movements ${index}: Deposit ${movements} `);
  } else {
    console.log(`Movements ${index}: Withdrew ${Math.abs(movements)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



*/

/*

const eurToUsd = 1.1;




const movementsUsd = movements.map(movements =>

  Math.trunc(Math.abs(movements * eurToUsd))

);



const movUsd = [];

for (const mov of movements) {

  movUsd.push(Math.trunc(Math.abs(mov * eurToUsd)));

}

console.log(movUsd);

console.log(movementsUsd);



const movementsDescriptions = movements.map((movements, i, arr) => {

  return `Movement ${i + 1}: You ${

    movements > 0 ? 'deposited' : 'withdrew'

  } ${Math.abs(movements)}`;

});



console.log(movementsDescriptions);



const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
//Accumulater is like a snowball
const totalUp = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

const totalUp1 = movements.reduce((acc, cur, i, arr) => acc + cur);
console.log(totalUp);
console.log(totalUp1);



const max = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
  );
  console.log(max);
  
  //Pipeline
  const totalDepositUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
  
  console.log(Math.trunc(totalDepositUSD));

  */

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const btnLogin = document.querySelector('.login__btn');

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const firstWithdrawal = movements.find(mov => mov < 0); //the first element that is true;
// console.log(firstWithdrawal);
// console.log(movements.includes(200));

// console.log(movements.some(mov => mov > 1500));

// console.log(movements.every(mov => typeof mov === 'number'));
// console.log(account4.movements.every(mov => mov > 0));

// function deposit(mov) {
//   return mov > 0;
// }

// console.log(account4.movements.every(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const bussyBank = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, curr) => acc + curr);
// console.log(bussyBank);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// //sort is bullshit it only sorts through strings
// //return < 0, A, B
// //return > 0, B, A

// movements.sort((a, b) => a - b);

// console.log([1, 2, 3, 4, 5]);

// console.log(new Array(1, 2, 3, 4, 5));

// const x = new Array(7);

// x.fill(1, 3, 5);
// console.log(x);

// //Array.from

// console.log(Array.from({ length: 7 }, () => 1));

// const z = Array.from({ length: 7 }, (_, i) => {
//   return i + 1;
// });
// console.log(z);

// const diceRolls = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(diceRolls);
