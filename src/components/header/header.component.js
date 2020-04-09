import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Header extends React.Component {
    constructor (props) {
        super(props)

        this.handleCallToRouter = this.handleCallToRouter.bind(this);
    }

    handleCallToRouter(event, value) {
        this.props.history.push(value);
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-logo'>
                    <span>Weather Search</span>
                </div>
                <div className='nav-bar-container'>
                <Tabs
                    onChange={this.handleCallToRouter}
                    value={this.props.history.location.pathname}
                >
                    <Tab 
                        label="Search Weather" 
                        value='/herolo-weather-app/'
                    />
                    <Tab 
                        label="Favorites" 
                        value='/favorites'
                    />
                 </Tabs> 
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    history: PropTypes.object
}

export default withRouter(Header);