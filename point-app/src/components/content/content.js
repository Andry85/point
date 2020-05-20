import React, { Component } from 'react';

import './content.css';

import Sidebar from './sidebar';
import Main from './main';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Main />
            </div>
        );
    }
}
export default Content; 


