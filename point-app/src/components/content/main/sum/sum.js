import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sum.css';

class Sum extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
			error: false
        };

		this.onError = this.onError.bind(this);
    }
	
	componentWillReceiveProps(nextProps) {
		console.log('ChildComponent : componentWillReceiveProps()');
		console.log('nextProps', nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('<Sum/> : shouldComponentUpdate()');
		console.log('nextProps', nextProps);
		console.log('nextState', nextState);
		return true;
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log('<Sum/> : componentWillUpdate()');
		console.log('nextProps', nextProps);
		console.log('nextState', nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('ChildComponent : componentDidUpdate()');
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
	}
	componentWillUnmount() {
		console.log('ChildComponent : componentWillUnmount()');
	} 
	
	onError() {
		this.setState({
            error: true
        });
	}
	
	 render() {
		 
		if (this.state.error) {
				throw new Error('Error ocurred');
		}

		return (
			

			<div>
				<span>{this.props.name}</span>
				<button key="error" onClick={this.onError}>
						Create error
				</button>
			</div>
		);
	 }
}

export default Sum;

Sum.propTypes = {
    name: PropTypes.string.isRequired,
};


