import React, { Component } from 'react';

import './weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: {},
          city: ''
        };
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        var self = this;

        function showPosition(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat);
            console.log(lon);

            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f0bcf3f051ae4c1234d4b59e077dc14`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    console.log(result.name);
                    self.setState({
                        isLoaded: true,
                        items: result
                    });

                    return fetch(`https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q=${result.country}&image_type=photo`);

                },
                (error) => {
                    self.setState({
                    isLoaded: true,
                    error
                    });
                }
            )
            .then(dat => dat.json())
            .then((data) => {
                console.log(data);
                console.log(data.hits[0].largeImageURL);
                self.setState({
                    city: data.hits[0].largeImageURL
                });
            });
        }
 
    }

    render() {
        const { error, isLoaded, items, city } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div className="weather">
                    <p><img src={`http://openweathermap.org/img/w/${items.weather[0].icon}.png`} /></p>
                    <p>Your country: <strong>{items.sys.country}</strong></p>
                    <p>Your city: <strong>{items.name}</strong></p>
                    <p>Your image: <img width="300" src={city}/></p>
                    
                    <p>It is: <strong>{items.weather[0].description}</strong></p>
                    <p>Temperature: <strong>{Math.floor(items.main.temp - 273.15)}</strong></p>
                </div>
            );
        }
    }
}
export default Weather; 


