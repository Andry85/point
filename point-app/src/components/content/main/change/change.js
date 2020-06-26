import React, { Component } from 'react';

import './change.css';

class Change extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: {}
        };
    }

    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result);
            this.setState({
                isLoaded: true,
                items: result
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });

              }
            );
        })

    }

    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <ul className="currency">
                    {Object.keys(items.rates).map((e, i) => (
                        <li className="currency__item" key={i}>
                            <h2 className="currency__titile">1 {items.base} = {items.rates[e]} {e}</h2> 
                        </li>
                ))}
                </ul>
            );
        }
       
    }
}
export default Change; 


