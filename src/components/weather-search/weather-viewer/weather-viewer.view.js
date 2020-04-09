import React from 'react';
import PropTypes from 'prop-types';
import { WeatherCard } from './weather-card/weather-card.view';
import {FavoriteBorder, Favorite} from '@material-ui/icons';

export const WeatherViewerView = (props) => {
    return (
        <div className='weather-viewer-container'>
            <div className='main-bar'>
                <div className='city-general-detail'>
                    <img src={props.getIconUrl(props.cityMainDetails.WeatherIcon)} />
                    <div className='city-text-and-temp'>
                        <span>{props.cityMainDetails.CityName}</span>
                        <span>{`${props.isCelsius ? props.cityMainDetails.Temperature.Metric.Value : props.cityMainDetails.Temperature.Imperial.Value}
                        °${props.isCelsius ? props.cityMainDetails.Temperature.Metric.Unit: props.cityMainDetails.Temperature.Imperial.Unit}`}
                        </span>
                    </div>
                </div>
                <div className='favorites'>
                    <span
                        onClick={props.toggleTemperatureUnit}
                    >{props.isCelsius ? 'C' : 'F' }</span>
                    {
                        props.isInFavorites ?
                        <Favorite 
                            className='favoriteIcon'
                            onClick={props.removeFromFavorites}
                     />
                        :
                        <FavoriteBorder 
                            className='favoriteIcon'
                            onClick={props.addToFavorites}
                  />
                }

                </div>
            </div>
            <div className='main-title'>
                <span>{props.cityMainDetails.WeatherText}</span>
            </div>
            <div className='weather-cards'>
                {
                    props.cityFullDetails.DailyForecasts && props.cityFullDetails.DailyForecasts.map((forecast) => {
                        return (
                            <WeatherCard
                            key={forecast.EpochDate} 
                            forecast={forecast}
                            extractDayFromTime={props.extractDayFromTime}
                            getIconUrl={props.getIconUrl}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

WeatherViewerView.propTypes = {
    cityMainDetails: PropTypes.object,
    cityFullDetails: PropTypes.object,
    extractDayFromTime: PropTypes.func,
    getIconUrl: PropTypes.func,
    isCelsius: PropTypes.bool,
    toggleTemperatureUnit: PropTypes.func,
    addToFavorites: PropTypes.func,
    isInFavorites: PropTypes.bool,
    removeFromFavorites: PropTypes.func
}

