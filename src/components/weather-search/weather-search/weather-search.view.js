import React from 'react';
import PropTypes from 'prop-types';
import {TextField , Button, List, ListItem, ListItemText} from '@material-ui/core';

export const WeatherSearchView = (props) => {
    return (
    <div className='weather-search-container'>
        <div className='weather-search-input'>
            <TextField
               value={props.countryName} 
               name='countryName'
               label='Country Name'
               onChange={props.inputHandler}
               className='search-input'
            />
            <Button
                variant="contained"
                color="primary"
                onClick={props.onSearchClick}
                disabled={props.countryName === ''}
            >
                Search
            </Button>
        </div>
        <div className='city-list'>
            {
                props.toShowList ? 
                <List>
                    {props.cityList.map((city) => {
                        return (
                            <ListItem button key={city.key}>
                               <ListItemText
                                onClick={() => {props.onCitySelect(city)}}
                               >{city.name}
                               </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
                :
                null
            }
        </div>
    </div>
    )
}

WeatherSearchView.propTypes = {
    countryName: PropTypes.string,
    inputHandler: PropTypes.func,
    onSearchClick: PropTypes.func,
    cityList: PropTypes.array,
    toShowList: PropTypes.bool,
    onCitySelect: PropTypes.func
}