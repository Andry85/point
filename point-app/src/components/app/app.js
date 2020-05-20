import React, { Component } from 'react';

import Header from '../header';
import Content from '../content';
import Footer from '../footer';



import './app.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
export default App; 


