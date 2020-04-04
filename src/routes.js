import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import WeatherSearch from './components/weather-search/weather.component';
import Favorites from './components/favorites/favorites.component';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={WeatherSearch} />
            <Route path='/favorites' component={Favorites} />
        </Switch>
    )
}