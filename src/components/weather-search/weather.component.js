import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { config } from '../../config/config';
import { insertSearchResult } from '../store/actions/city-search.action';
import { insertCityDetailsResult } from '../store/actions/city-details.action';
import { insertCityFullDetailsResult, toggleTempUnits } from '../store/actions/city-full-details.action';
import { WeatherSearchView } from './weather-search/weather-search.view';
import { WeatherViewerView } from './weather-viewer/weather-viewer.view';
import { days, getIconUrl } from '../../helpers/helpers';
import { addToFavorites, removeFromFavorites } from '../store/actions/favorites.action';
import * as weatherService from '../../services/weather.service';
import { toast } from 'react-toastify';

const englishLettersRgx = /^[a-zA-Z ]+$/;
class WeatherSearch extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            countryName : 'Tel Aviv',
            countryKey: '215854',
            toShowList: false,
            isCelsius: false,
            isInFavorites: false
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.onCitySelect = this.onCitySelect.bind(this);
        this.extractDayFromTime = this.extractDayFromTime.bind(this);
        this.toggleTemperatureUnit = this.toggleTemperatureUnit.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.isExistsInFavorites = this.isExistsInFavorites.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
    }

    componentDidMount() {
        if (this.props.cityMainDetails && this.props.cityMainDetails.CityName && this.isExistsInFavorites()) {
            this.setState({isInFavorites: true});
        }
        this.onSearchClick();
    }

    componentDidUpdate(prevProps) {
        if (this.props.cityMainDetails.CityName !== prevProps.cityMainDetails.CityName) {
          if (this.isExistsInFavorites()) {
              this.setState({isInFavorites: true});
          } else {
              this.setState({isInFavorites: false});
          }
        }
      }

    inputHandler(e) {
        const {value, name} = e.target;
        this.searchCity(value);
        this.setState({[name] : value})
    }

    onSearchClick() {
        if (this.state.countryKey!=='') {
            weatherService.getCurrentCondition(this.state.countryKey).then((res) => {
                res.data[0].CityName = this.state.countryName;
                this.props.insertCityDetailsResult(res.data);
                weatherService.getFiveDaysForecast(this.state.countryKey).then((res) => {
                    this.props.insertCityFullDetailsResult(res.data);
                }).catch((err) => {
                    console.error(err);
                    toast.error(err.message, {
                        position: toast.POSITION.TOP_LEFT
                      });
                })
            }).catch((err) => {
                console.error(err);
                toast.error(err.message, {
                    position: toast.POSITION.TOP_LEFT
                  });
            })
        }
    }

    onCitySelect(city) {
        this.setState({countryName: city.name, 
            countryKey: city.key,
            toShowList: false
        });
    }

    searchCity(city) {
        if (englishLettersRgx.test(city)) {
            weatherService.getAutoCompleteCities(city).then((res) => {
                this.props.insertSearchResult(res.data);
                this.setState({toShowList: true});
            }).catch((err) => {
                console.error(err);
                toast.error(err.message, {
                    position: toast.POSITION.TOP_LEFT
                  });
            })
        }
    }

    extractDayFromTime(selectedDate) {
        const date = new Date(selectedDate);
        return days[date.getDay()];
    }

    toggleTemperatureUnit() {
        this.setState({isCelsius: !this.state.isCelsius});
        this.props.toggleTempUnits(this.props.cityFullDetails);
    }

    isExistsInFavorites() {
        if (this.props.favorites.length > 0) {
            for (let i=0; i< this.props.favorites.length; i++) {
                if (this.props.favorites[i].CityName.toLowerCase() === this.props.cityMainDetails.CityName.toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    }

    addToFavorites() {
        if (!this.isExistsInFavorites()) {
            this.setState({isInFavorites: true});
            this.props.addToFavorites(this.props.cityMainDetails);
        }
    }

    removeFromFavorites() {
        if (this.isExistsInFavorites()) {
            this.setState({isInFavorites: false});
            this.props.removeFromFavorites(this.props.cityMainDetails);
        }
    }

    render() {
        return (
            <>
           <WeatherSearchView 
              countryName={this.state.countryName}
              inputHandler={this.inputHandler}
              onSearchClick={this.onSearchClick}
              cityList={this.props.cityList ? this.props.cityList : []}
              toShowList={this.state.toShowList}
              onCitySelect={this.onCitySelect}
           />
           {
            this.props.cityMainDetails.CityName ?
               <WeatherViewerView 
                cityMainDetails={this.props.cityMainDetails}
                cityFullDetails={this.props.cityFullDetails}
                extractDayFromTime={this.extractDayFromTime}
                getIconUrl={getIconUrl}
                isCelsius={this.state.isCelsius}
                toggleTemperatureUnit={this.toggleTemperatureUnit}
                addToFavorites={this.addToFavorites}
                isInFavorites={this.state.isInFavorites}
                removeFromFavorites={this.removeFromFavorites}
            />
            :
                null
           }
           </>
        );
    }
}

WeatherSearch.propTypes = {
    cityList: PropTypes.array,
    insertSearchResult: PropTypes.func,
    insertCityDetailsResult: PropTypes.func,
    favorites: PropTypes.array
}

const mapStateToProps = (state, ownProps) => ({
        cityList: state.cityList,
        cityMainDetails: state.cityMainDetails,
        cityFullDetails: state.cityFullDetails,
        favorites: state.favorites
  })
  
  const mapDispatchToProps = {
      insertSearchResult,
      insertCityDetailsResult,
      insertCityFullDetailsResult,
      toggleTempUnits,
      addToFavorites,
      removeFromFavorites
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSearch);