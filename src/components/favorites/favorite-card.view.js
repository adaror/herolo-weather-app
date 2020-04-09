import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography, CardMedia} from '@material-ui/core';
import { config } from '../../config/config';

export const FavoriteCard = (props) => {
    return (
        <div className='favorite-card'>
            <Card 
                className='fv-card'
            >
                <CardContent
                    className='fv-card-content'
                >
                    <Typography 
                            className='city-name-text'
                            component='span'
                        >
                            {props.city.CityName}
                        </Typography>
                        <img src={props.getIconUrl(props.city.WeatherIcon)} />
                        <Typography 
                            className='city-details-text'
                            component='span'
                        >
                            {props.city.WeatherText}
                        </Typography>
                        <Typography 
                            className='city-temp-text'
                            component='span'
                        >
                            {`${props.city.Temperature.Imperial.Value}°${props.city.Temperature.Imperial.Unit}`}
                        </Typography>
                </CardContent>
            </Card>      
        </div>
    )
}

FavoriteCard.propTypes = {
    city : PropTypes.object,
    getIconUrl: PropTypes.func
}
