import React, { Component } from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";

import './main.css';

import News from './news';
import Weather from './weather';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <News />
                    </Route>
                    <Route path="/weather">
                        <Weather/>
                    </Route>
                </Switch>
            </div>
        );
    }
}
export default Main; 


