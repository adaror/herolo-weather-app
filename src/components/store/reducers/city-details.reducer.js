import { initialState } from '../initialState';
import { INSERT_DETAILS_SUCCESS, INSERT_DETAILS_FAILED, TOGGLE_TEMP_UNIT } from '../actions/city-details.action';

const insertCityDetailsReducer = (state = initialState.cityMainDetails, action) => {
    switch (action.type) {
        case INSERT_DETAILS_SUCCESS:
            if (action.cityDetails.length > 0) {
                 return action.cityDetails[0];
            }
            return state;
        case TOGGLE_TEMP_UNIT:
            
        default:
            return state;
    }
}

export default insertCityDetailsReducer;