import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './nav.css';

class Nav extends Component {
    render() {
        return (
            <ul className="navList">
                <li className="navList__item">
                    <Link to="/">News</Link>
                </li>
                <li className="navList__item">
                    <Link to="/weather">Weather</Link>
                </li>
                <li className="navList__item">
                    <Link to="/change">Exchange rates</Link>
                </li>
                <li className="navList__item">
                    <Link to="/calc">Calculator</Link>
                </li>
                <li className="navList__item">
                    <Link to="/message">New message</Link>
                </li>
            </ul>
        );
    }
}
export default Nav; 


