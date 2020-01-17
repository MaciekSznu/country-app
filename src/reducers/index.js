import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';

// scalanie reducerów
const reducers = combineReducers({
  countriesReducer
});

export default reducers;