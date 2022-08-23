'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
//Fix Julia's data
const fixedDogsJulia = dogsJulia.slice();
fixedDogsJulia.splice(0, 1);
fixedDogsJulia.splice(-2);

const allDogs = fixedDogsJulia.concat(dogsKate);

const calcAverageHumanAge = function (dogAge) {
  const humanAge = dogAge.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const filteredDogs = humanAge.filter(age => age >= 18);
  const average =
    filteredDogs.reduce((acc, curr, i, arr) => acc + curr) /
    filteredDogs.length;

  console.log(average);
};
