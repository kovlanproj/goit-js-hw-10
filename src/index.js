import { fetchCountries } from './js/fetchCountries';
import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputField: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
};

refs.inputField.addEventListener(
  'input',
  debounce(onFieldInput, DEBOUNCE_DELAY)
);

function onFieldInput() {
  fetchCountries(refs.inputField.value).then(renderCountryList);
}

function renderCountryList(countries) {
  let markup = '';
  countries.forEach(country => {
    markup += `<li>${country.name.common}</li>`;
  });
  refs.countriesList.innerHTML = markup;
}
