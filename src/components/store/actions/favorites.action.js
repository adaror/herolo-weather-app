export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export function addToFavorites(city) {
    return {
        type: ADD_TO_FAVORITES,
        city
    };
}

export function removeFromFavorites(city) {
    return {
        type: REMOVE_FROM_FAVORITES,
        city
    };
}



