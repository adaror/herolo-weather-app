import { initialState } from '../initialState';
import { INSERT_RESULTS_SUCCESS, INSERT_RESULTS_FAILED } from '../actions/city-search.action';

const insertCityListReducer = (state = initialState.cityList, action) => {
    switch (action.type) {
        case INSERT_RESULTS_SUCCESS:
            if (action.cities.length > 0) {
                const filteredCities = action.cities.map((city) => {
                    return {
                        key: city.Key,
                        name : city.LocalizedName
                     } 
                 });
                 return filteredCities;
            }
            return state;
        default:
            return state;
    }
}

export default insertCityListReducer;