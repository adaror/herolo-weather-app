export const INSERT_FULL_DETAILS_SUCCESS = 'INSERT_FULL_DETAILS_SUCCESS';
export const INSERT_FULL_DETAILS_FAILED = 'INSERT_FULL_DETAILS_FAILED';
export const TOGGLE_TEMP_UNITS = 'TOGGLE_TEMP_UNITS';

export function insertCityFullDetailsResult(cityFullDetails) {
    return {
        type: INSERT_FULL_DETAILS_SUCCESS,
        cityFullDetails
    };
}

export function toggleTempUnits(cityFullDetails) {
    return {
        type: TOGGLE_TEMP_UNITS,
        cityFullDetails
    };
}



