import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comment.css';

class Comment extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			content: "",
			valid: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePostchange = this.handlePostchange.bind(this);
	}
	
	handlePostchange(e) {
		const content = e.target.value;
		this.setState(()=>{
			return {
				content,
				valid: content.length <= 50
			};
		});
	}

	handleSubmit() {
		if (!this.state.valid) {
			return console.log('too long');;
		}
		const newPost = {
			content: this.state.content
		};
		console.log('Handling submition!');
	}
	

	
	 render() {
		 
		return (
			

			<div className="comment">
				<textarea value={this.state.content} onChange={this.handlePostchange} placeholder="What's on your mind?"/>
				<div>
					<button onClick={this.handleSubmit}>Post</button>
				</div>
			</div>
		);
	 }
}

export default Comment;


