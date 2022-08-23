// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

//Selecting Elements
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We used cookie for improved functionality and analytics.';
message.innerHTML =
  'We used cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
