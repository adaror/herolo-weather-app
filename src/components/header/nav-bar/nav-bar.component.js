import React, {Component} from "react";
import {Tabs, Tab} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleCallToRouter = this.handleCallToRouter.bind(this);
    }

    handleCallToRouter(event, value) {
        this.props.history.push(value);
    }
    
    render() {
        return(

        )
    }
}

export default withRouter(NavBar)  
