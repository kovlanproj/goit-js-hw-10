import { fetchCountries } from './js/fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = {
  countriesList: document.querySelector('.country-list'),
};

fetchCountries('sw').then(renderCountryList);

function renderCountryList(countries) {
  let markup = '';

  countries.forEach(country => {
    markup += `<li>${country.name.common}</li>`;
  });
  refs.countriesList.innerHTML = markup;
}
