import React, { Component } from 'react';

import './sidebar.css';

import Nav from '../nav';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Nav/>
            </div>
        );
    }
}
export default Sidebar; 


