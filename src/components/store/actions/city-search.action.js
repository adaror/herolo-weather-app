export const INSERT_RESULTS_SUCCESS = 'INSERT_RESULTS_SUCCESS';
export const INSERT_RESULTS_FAILED = 'INSERT_RESULTS_SUCCESS';

export function insertSearchResult(cities) {
    return {
        type: INSERT_RESULTS_SUCCESS,
        cities
    };
}



