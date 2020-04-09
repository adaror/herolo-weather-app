import { initialState } from '../initialState';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/favorites.action';

function getIndexOfCity(city, state) {
    for (let i=0; i<state.length; i++) {
        if (state[i].CityName === city.CityName) {
            return i;
        }
    }
}

const addToFavoritesReducer = (state = initialState.favorites, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
                state.push(action.city);
            return state;
        case REMOVE_FROM_FAVORITES:
            let index = getIndexOfCity(action.city, state);
            state.splice(index, 1);
            return state;
        default:
            return state;
    }
}

export default addToFavoritesReducer;