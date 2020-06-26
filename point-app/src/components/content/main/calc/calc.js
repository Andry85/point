import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './calc.css';

import Sum from '../sum';
import Carusel from '../carusel';


class Calc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            precent: '',
            amount: '',
            result: 'Result',
            user: {
                name: 'Oleg',
                secondName: 'Pichkur'
            },
			name: '',
			error: '',
			info: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.onChangename = this.onChangename.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChange(e) {

        if (e.target.classList.contains("calcWrapBox__input--precent")) {
            this.setState({
                precent: e.target.value
            });
        } else if (e.target.classList.contains("calcWrapBox__input--amount")) {
            this.setState({
                amount: e.target.value
            });
        }  
    }

    onBtnClick() {
        console.log(this);
        const { precent, amount} = this.state;

        if (precent == '' || amount == '') {
            
        } else {

            this.setState({
                result: amount * precent / 100
            });
        }
    }


    onChangename() {

           

            this.setState((state) => ({
               
                user: {
                    name: state.user.name,
                    secondName: 'Shapoval'
                } 

            }));
    }

    componentDidMount() {
        console.log('Component: componentDidMount');
    }
  
    componentWillMount() {
        console.log('Component: componentWillMount');
    }
	
	handleChangeName(e) {
		this.setState({
                name: e.target.value
        });
	}
	
	componentDidCatch(error, info) {
		console.log('componentDidCatch');
		console.log(error);
		console.log(info);
		this.setState({
                error,
				info
        });
	}
	
	

    render() {

			console.log('Component: render');
			
			if (this.state.error) {
					return (
						<div className="error">
							{this.state.error && this.state.error.toString()}
							<br/>
							{this.state.info.componentStack}
						</div>
					);
			}
			
		     
        
            return (
                <div className="calcWrap">
                    <div className="calcWrapBox">
                        <h2 className="calcWrapBox__title">{this.props.title}</h2>
                        <div className="calcWrapBox__form">
                            <input className="calcWrapBox__input calcWrapBox__input--precent" type="text" value={this.state.precent} onChange={this.handleChange}/>
                            <span className="calcWrapBox__percent">% from</span>
                            <input className="calcWrapBox__input calcWrapBox__input--amount" type="text" value={this.state.amount} onChange={this.handleChange}/>
                            <span className="calcWrapBox__result">= </span>
                            <button className="calcWrapBox__btn" onClick={this.onBtnClick}>{this.state.result}</button>
                        </div>
                    </div>
                    <div className="user">
                        <h3 className="user__name">{this.state.user.name}</h3>
                        <h4 className="user__secondname">{this.state.user.secondName}</h4>
                        <button className="user__btn" onClick={this.onChangename}>Change name</button>
                    </div>
					<input className="calcWrapBox__input" type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    <Sum name={this.state.name} />
                    <Carusel/>
                </div>
            );
        
       
    }
}
export default Calc;

Calc.propTypes = {
    title: PropTypes.string.isRequired
};
Calc.defaultProps = {
    title: 'Your number'
};


