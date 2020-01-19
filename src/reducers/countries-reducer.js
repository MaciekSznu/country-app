import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: []
};

const countriesReducer = function(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, {countries: state.countries});

    case GET_COUNTRY:
      const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
      return Object.assign({}, state, {selectedCountry});

    case SEARCH_COUNTRIES:
      // includes weryfikuje czy nazwa państaw zawiera w sobie wyszo=ukiwany ciąg znaków podany jako seacrhText, filter zapisuje państwa spełniające warunek do const foundCountries
      const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
      return Object.assign({}, state, {visibleCountries: foundCountries});
  }

  return state;
};

export default countriesReducer;
