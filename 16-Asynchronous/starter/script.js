'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
  // countriesContainer.style.opacity = 1;
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
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, error = 'Something went wrong') {
  return fetch(`${url}`).then(response => {
    if (!response.ok) throw new Error(`${error} ${response.status}`);
    return response.json();
  });
};

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
  getCountryData('Singapore');
});
