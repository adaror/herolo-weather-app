import { config } from '../config/config';
const axios = require('axios');

function getCurrentCondition(locationKey) {
    return axios.get(`${config.accuWeatherUrl}/currentconditions/v1/${locationKey}?apikey=${config.weatherAppKey}`);
}

function getAutoCompleteCities(city) {
    return axios.get(`${config.accuWeatherUrl}/locations/v1//cities/autocomplete?apikey=${config.weatherAppKey}&q=${city}`);
}

function getFiveDaysForecast(locationKey) {
    return axios.get(`${config.accuWeatherUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${config.weatherAppKey}`);
}

export {
    getCurrentCondition,
    getAutoCompleteCities,
    getFiveDaysForecast
}