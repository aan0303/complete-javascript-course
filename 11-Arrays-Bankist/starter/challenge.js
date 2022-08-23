'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const account1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
//Fix Julia's data
const fixedDogsJulia = dogsJulia.slice();
fixedDogsJulia.splice(0, 1);
fixedDogsJulia.splice(-2);
console.log(fixedDogsJulia);

const checkDogs = function (dogsJulia, dogsKate) {
  const allDogs = dogsJulia.concat(dogsKate);

  allDogs.forEach((age, i) => {
    console.log(
      `Dog number ${i + 1} is ${
        age >= 3 ? `an adult, and is ${age} years old` : `still a puppy`
      }`
    );
  });
};

checkDogs(fixedDogsJulia, dogsKate);

const changeMovements = function (movements) {
  movements.forEach(function (movements, i) {
    const type = movements > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
 <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
 <div class="movements__value">${movements}</div>
 </div>`;

    document.querySelector('.movements').insertAdjacentHTML('afterbegin', html);
  });
};

changeMovements(account1);
