// importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing module');
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('cheese', 4);
// add('pizza', 12);
console.log('Start Fetching');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
console.log(res);

const data = await res.json();
console.log(data);

console.log(`Something`);
// addToCart('bread', 5);
// console.log(price, totalQuantity);
// console.log(shippingCost);
