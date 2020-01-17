const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRY = 'GET_COUNTRY';
const DELETE_COUNTRY = 'DELETE_COUNTRY';
const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
const SET_CONTINENT = 'SET_CONTINENT';

function getCountries() {
  return {
    type: GET_COUNTRIES
  }
};

function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id,
  };
};

function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id,
  };
};

function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText,
  };
};

function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name,
  };
};

export { GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT, getCountries, getCountry, deleteCountry, searchCountries, setContinent };