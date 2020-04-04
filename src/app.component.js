import React from 'react';
import Header from './components/header/header.component';
import './app.style.scss';
import {
  Switch, Route, withRouter,
} from 'react-router-dom';
import WeatherSearch from './components/weather-search/weather.component';
import Favorites from './components/favorites/favorites.component';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={WeatherSearch} />
            <Route path="/favorites" exact component={Favorites} />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
