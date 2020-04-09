import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography, CardMedia} from '@material-ui/core';
import { config } from '../../../../config/config';

export const WeatherCard = (props) => {
    return (
        <div className='weather-card'>
            <Card
                className='card'
            >
                <Typography 
                    className='card-day'
                    component='span'
                >
                    {props.extractDayFromTime(props.forecast.Date)}
                    </Typography>
            <div className='content-container'>
            <CardContent
                    className='card-content'
                >
                    <img src={props.getIconUrl(props.forecast.Day.Icon)} />
                    <Typography 
                        component='span'
                    >
                       {`Day: ${props.forecast.Day.IconPhrase}`} 
                    </Typography>
                    <Typography 
                        className='day-temp'
                        component='span'
                    >
                       {`${props.forecast.Temperature.Maximum.Value.toFixed(2)}°${props.forecast.Temperature.Maximum.Unit}`} 
                    </Typography>
                </CardContent>
                <CardContent
                    className='card-content'
                >
                    <img src={props.getIconUrl(props.forecast.Night.Icon)} />
                    <Typography 
                        component='span'
                    >
                       {`Night: ${props.forecast.Night.IconPhrase}`} 
                    </Typography>
                    <Typography 
                        className='day-temp'
                        component='span'
                    >
                       {`${props.forecast.Temperature.Minimum.Value.toFixed(2)}°${props.forecast.Temperature.Minimum.Unit}`} 
                    </Typography>
                </CardContent>
            </div>
            </Card>
        </div>
    )
}

WeatherCard.propTypes = {
    forecast: PropTypes.object,
    extractDayFromTime: PropTypes.func,
    getIconUrl: PropTypes.func
}