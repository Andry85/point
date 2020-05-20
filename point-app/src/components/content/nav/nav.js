import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './nav.css';

class Nav extends Component {
    render() {
        return (
            <ul className="navList">
                <li className="navList__item">
                    <Link to="/">Новини</Link>
                </li>
                <li className="navList__item">
                    <Link to="/weather">Погода</Link>
                </li>
                <li className="navList__item">
                    <Link to="/change">Курси валют</Link>
                </li>
                <li className="navList__item">
                    <Link to="/calc">Калькулятор</Link>
                </li>
            </ul>
        );
    }
}
export default Nav; 


