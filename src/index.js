import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputField: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryCard: document.querySelector('.country-info'),
};

refs.inputField.addEventListener(
  'input',
  debounce(onFieldInput, DEBOUNCE_DELAY)
);

function onFieldInput() {
  if (refs.inputField.value !== '') {
    fetchCountries(refs.inputField.value)
      .then(renderCountryList)
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else renderCountryList('');
}

function renderCountryList(countries) {
  if (countries === '') {
    countriesDisplayReset();
  } else if (countries.length > 10) {
    countriesDisplayReset();
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countries.length === 1) {
    refs.countriesList.innerHTML = '';
    refs.countryCard.innerHTML = countryMarkup(...countries);
    // console.log(countries);
  } else {
    refs.countriesList.innerHTML = countryListMarkup(countries);
    refs.countryCard.innerHTML = '';
  }
}

function countryListMarkup(countries) {
  let markup = '';
  countries.forEach(({ flags, name }) => {
    markup += `<li><img src="${flags.svg}" width="15" height="15"> ${name.official}</li>`;
  });
  return markup;
}

function countryMarkup({ name, population, capital, languages, flags }) {
  console.log(Object.values(languages).join(', '));
  return `
    <div>
    <h2>
    <img src="${flags.svg}" width="20" height="20">
    ${name.official}</h2>
    <p><span>Capital: </span> ${capital}</p>
  <p><span>Population: </span>${population}</p>
  <p><span>Languages: </span>${Object.values(languages).join(', ')}</p>
    </div>
    `;
}

function countriesDisplayReset() {
  refs.countriesList.innerHTML = '';
  refs.countryCard.innerHTML = '';
}
