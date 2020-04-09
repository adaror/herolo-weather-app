import { initialState } from '../initialState';
import { INSERT_FULL_DETAILS_SUCCESS, INSERT_FULL_DETAILS_FAILED, TOGGLE_TEMP_UNITS } from '../actions/city-full-details.action';

function changeUnits(temp, currUnit) {
    if (currUnit === 'F') {
        return (temp - 32) / 1.8;
    } else {
        return (temp * 1.8) + 32;
    }
}

const insertFullCityDetailsReducer = (state = initialState.cityFullDetails, action) => {
    switch (action.type) {
        case INSERT_FULL_DETAILS_SUCCESS:
            return action.cityFullDetails;
        case TOGGLE_TEMP_UNITS:
            let dailyForecasts = action.cityFullDetails.DailyForecasts;
            for (let i =0; i< dailyForecasts.length; i++) {
                dailyForecasts[i].Temperature.Minimum.Value = changeUnits(dailyForecasts[i].Temperature.Minimum.Value, dailyForecasts[i].Temperature.Minimum.Unit);
                dailyForecasts[i].Temperature.Maximum.Value = changeUnits(dailyForecasts[i].Temperature.Maximum.Value, dailyForecasts[i].Temperature.Maximum.Unit);
                dailyForecasts[i].Temperature.Minimum.Unit = dailyForecasts[i].Temperature.Minimum.Unit === 'F' ? 'C' : 'F';
                dailyForecasts[i].Temperature.Maximum.Unit = dailyForecasts[i].Temperature.Maximum.Unit === 'F' ? 'C' : 'F';
            }
            return action.cityFullDetails;
        default:
            return state;
    }
}

export default insertFullCityDetailsReducer;