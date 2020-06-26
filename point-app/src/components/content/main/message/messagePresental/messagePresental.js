import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './messagePresental.css';



class MessagePresental extends Component {
	
	 render() {
		 
		return (
			

			<div className="comment">
				<textarea onChange={this.handChange} value={this.state.input} placeholder="What's on your mind?"/>
				<div>
					<button onClick={this.handleSend}>Post</button>
				</div>	
			</div>
		);
	 }
}

export default MessagePresental;