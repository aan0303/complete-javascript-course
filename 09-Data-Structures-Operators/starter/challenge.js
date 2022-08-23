'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
3;
document.querySelector('button').addEventListener('click', function () {
  camelCaseConvert(document.querySelector('textarea').value);
});

function camelCaseConvert(text) {
  const byLine = text.split('\n');
  const byWord = [];

  for (const name of byLine) {
    byWord.push(name.toLowerCase().trim().split('_'));
  }

  for (const [count, [firstWord, secondWord]] of byWord.entries()) {
    console.log(
      (firstWord + secondWord[0].toUpperCase() + secondWord.slice(1)).padEnd(
        18,
        ' '
      ),
      '*'.repeat(count + 1)
    );
  }
}

// console.log(camelCaseConvert(textarea));

/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
