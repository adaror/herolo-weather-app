import { combineReducers } from 'redux';
import insertCityListReducer from './city-search.reducer';
import insertCityDetailsReducer from './city-details.reducer';
import insertFullCityDetailsReducer from './city-full-details.reducer';
import addToFavoritesReducer from './favorites.reducer';

export default combineReducers({
    cityList: insertCityListReducer,
    cityMainDetails: insertCityDetailsReducer,
    cityFullDetails: insertFullCityDetailsReducer,
    favorites: addToFavoritesReducer
});