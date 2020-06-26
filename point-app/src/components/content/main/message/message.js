import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './message.css';

import { addMessage } from '../../../../actions';


class MessagePresental extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.handChange = this.handChange.bind(this);
  }

  handChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSend = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
	
  render() {


   return (
     

     <div className="comment">
       <textarea onChange={this.handChange} value={this.state.input} placeholder="What's on your mind?"/>
       <div>
         <button onClick={this.handleSend}>Post</button>
       </div>
       <div>{this.props.items}</div>
      
     </div>
   );
  }
}



const mapStateToProps = (state) => {
  return {
	  items: state.messagesReducer.blabla
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      dispatch(addMessage(text))
    }
  }
}

const Message = connect(mapStateToProps, mapDispatchToProps)(MessagePresental)

export default Message;