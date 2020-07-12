import React, { Component } from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";

import './main.css';

import News from './news';
import Weather from './weather';
import Change from './change';
import Calc from './calc';
import Message from './message';
import Thunk from './thunk';



class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <News />
                    </Route>
                    <Route exact path="/weather">
                        <Weather />
                    </Route>
                    <Route exact path="/change">
                        <Change />
                    </Route>
                    <Route exact path="/calc">
                        <Calc title="Percent of the number:" />
                    </Route>
                    <Route exact path="/message">
                        <Message />
                    </Route>
                    <Route exact path="/thunk">
                        <Thunk />
                    </Route>
                </Switch>
            </div>
        );
    }
}
export default Main; 

