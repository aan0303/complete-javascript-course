const countriesContainer = document.querySelector('.countries');

const getJSON = (async () => {
  const data = await fetch(`https://restcountries.com/v3.1/name/Malaysia`);
  const [jsonDATA] = await data.json();
  console.log(jsonDATA);

  let html = `   <article class="country">
  <img class="country__img" src="${jsonDATA.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${jsonDATA.name.common}</h3>
    <h4 class="country__region">${jsonDATA.region}</h4>
    <p class="country__row"><span>👫</span>${jsonDATA.population}</p>
    <p class="country__row"><span>🗣️</span>${jsonDATA.languages.msa}</p>
    <p class="country__row"><span>💰</span>${jsonDATA.currencies.MYR.name}</p>
  </div>
</article>`;

  countriesContainer.style.opacity = '1';
  countriesContainer.insertAdjacentHTML('afterbegin', html);
})();
