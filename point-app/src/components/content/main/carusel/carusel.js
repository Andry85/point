import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


import './carusel.css';

class Carusel extends Component {

	constructor(props) {
        super(props);
        this.state = {
            responsive:{
				0: {
					items: 1,
				},
				800: {
					items: 2,
				},
				1000: {
					items: 4,
				},
			}
        };

    }

	

	
	
	 render() {
		 
		return (
			<OwlCarousel className="owl-theme" loop nav margin={0} responsive={this.state.responsive}>
				<div className="item"><h4>1</h4></div>
				<div className="item"><h4>2</h4></div>
				<div className="item"><h4>3</h4></div>
				<div className="item"><h4>4</h4></div>
				<div className="item"><h4>1</h4></div>
				<div className="item"><h4>2</h4></div>
				<div className="item"><h4>3</h4></div>
				<div className="item"><h4>4</h4></div>
			</OwlCarousel>
		);
	 }
}

export default Carusel;


