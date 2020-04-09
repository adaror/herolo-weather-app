export const INSERT_DETAILS_SUCCESS = 'INSERT_DETAILS_SUCCESS';
export const INSERT_DETAILS_FAILED = 'INSERT_DETAILS_FAILED';
export const TOGGLE_TEMP_UNIT = 'TOGGLE_TEMP_UNIT';

export function insertCityDetailsResult(cityDetails) {
    return {
        type: INSERT_DETAILS_SUCCESS,
        cityDetails
    };
}

export function toggleTempUnits(cityDetails) {
    return {
        type: TOGGLE_TEMP_UNIT,
        cityDetails
    };
}



