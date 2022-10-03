'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');

/*
///////////////////////////////////////

function getCountryData(name) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
  request.responseType = 'json';

  request.addEventListener('load', function () {
    const [data] = request.response;

    console.log(data);
    let html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
        <p class="country__row"><span>🗣️</span>${
          Object.entries(data.languages)[0][1]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.entries(data.currencies)[0][1].name
        }</p>
      </div>
    </article>
   `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });

  request.send();
}
*/

const renderCountry = function (data, className = '') {
  let html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(data.currencies)[0][1].name
      }</p>
    </div>
  </article>
 `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
function getCountryDataAndNeighbour(name) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
  request.responseType = 'json';

  request.addEventListener('load', function () {
    const [data] = request.response;
    console.log(data);
    renderCountry(data);

    //Get neighbour country
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();

    request2.responseType = 'json';
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

    request2.addEventListener('load', function () {
      const [data2] = request2.response;

      renderCountry(data2, 'neighbour');
    });
    request2.send();
  });

  request.send();
}

getCountryDataAndNeighbour('usa');
*/
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  console.error(msg);
  countriesContainer.style.opacity = 1;
};

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=127722282185009e15876662x26378`
  )
    .then(responses => {
      if (!responses.ok) throw new Error(`${responses.status}`);
      return responses.json();
    })
    .then(data => {
      if (!data.city || !data.country) throw new Error(`Data not found`);

      fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        .then(responses => {
          if (!responses.ok) throw new Error(`${error} ${responses.status}`);
          return responses.json();
        })
        .then(data => renderCountry(data[0]));

      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => renderError(`${err}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);



const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders;
      if (!neighbour) throw new Error(`Neighbour country not found`);

      //Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        `Neighbour country not found`
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong, Problems: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('Portugal');
});


console.log(`Test Start`);
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve(`Resolved promise 2`).then(res => {
  for (let i = 0; i < 10000; i++) console.log(res);
});

console.log('Test end');


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening`);
  
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You WIN`);
    } else {
      reject(new Error(`You LOST`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};a

wait(2)
.then(() => {
  console.log('I waited for 2 seconds');
  return wait(1);
})
.then(() => console.log(`I waited for 1 second`));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(err => console.error(err));


// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );



const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: long } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${long}?geoit=json&auth=127722282185009e15876662x26378`
      );
    })
    .then(responses => {
      if (!responses.ok) throw new Error(`${responses.status}`);
      return responses.json();
    })
    .then(data => {
      if (!data.city || !data.country) throw new Error(`Data not found`);
      
      fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        .then(responses => {
          if (!responses.ok) throw new Error(`${error} ${responses.status}`);
          return responses.json();
        })
        .then(data => renderCountry(data[0]));

      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => renderError(`${err}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

whereAmI();

live_HeW8vJdU7UxKHlbtOzaixGsjShEX0YkcSW2V9CG0kIXfuk5OZvTqEG1cOpiNthqK
let currImage;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = `${imgPath}`;
    
    image.addEventListener('load', function () {
      image.classList.add('images');
      imgContainer.append(image);
      resolve(image);
    });
    
    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

createImg(`/img/img-1.jpg`)
.then(img => {
  currImage = img;
  return wait(2);
})
.then(() => {
  currImage.style.display = 'none';
  return createImg(`/img/img-2.jpg`);
})
.then(img => {
  currImage = img;
  return wait(2);
})
.then(() => (currImage.style.display = 'none'));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: long } = pos.coords;

    const res = await fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json&auth=268578979331270773637x89111`
    );

    if (!res.ok) throw new Error(`Problem getting your location`);
    const coords = await res.json();

    const country = await fetch(
      `https://restcountries.com/v3.1/name/${coords.country}`
    );

    if (!country.ok) throw new Error(`Problem getting your country`);
    const [countryRes] = await country.json();
    renderCountry(countryRes);
    return `You are in ${coords.city}, ${coords.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);

    //reject promise returned from async function
    throw err;
  }
};

console.log(`1: I will get location`);

// const city = whereAmI();
// console.log(city);
// whereAmI().then(city => console.log(city));
// console.log(`2: Finished getting location`);

(async function () {
  try {
    const country = await whereAmI();
    console.log(country);
  } catch (err) {
    renderError(err);
  }
})();

const getJSON = function (url, error = 'Something went wrong') {
  return fetch(`${url}`).then(response => {
    if (!response.ok) throw new Error(`${error} ${response.status}`);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('Malaysia', 'Portugal', 'India');

const getJSON = function (url, error = 'Something went wrong') {
  return fetch(`${url}`).then(response => {
    if (!response.ok) throw new Error(`${error} ${response.status}`);
    return response.json();
  });
};

//Promise.race (it will never care if the promise is fulfilled or rejected)
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//   ]);

//   console.log(res[0]);
// })();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, s * 1000);
  });
};

// Promise.race([
  //   getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  //   timeout(1),
  // ])
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err));
  
  // Promise.allSettled([
    //   Promise.resolve('Success'),
    //   Promise.reject(`Bruh`),
    //   Promise.resolve(`Mom`),
    // ]).then(res => console.log(res));
    
    // Promise.any([
      //   Promise.resolve('Success'),
      //   Promise.reject(`Bruh`),
//   Promise.resolve(`Mom`),
// ]).then(res => console.log(res));
let currImage;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};



// createImg(`/img/img-1.jpg`)
//   .then(img => {
  //     currImage = img;
  //     return wait(2);
//   })
//   .then(() => {
  //     currImage.style.display = 'none';
//     return createImg(`/img/img-2.jpg`);
//   })
//   .then(img => {
//     currImage = img;
//     return wait(2);
//   })
//   .then(() => (currImage.style.display = 'none'));


*/

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = `${imgPath}`;

    image.addEventListener('load', function () {
      image.classList.add('images');
      imgContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadAll = async function (imgArr) {
  const imgs = await Promise.all([
    createImg(imgArr[0]),
    createImg(imgArr[1]),
    createImg(imgArr[2]),
  ]);

  imgs.map(img => img.classList.add('parallel'));
};

loadAll([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]);
