import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './message.css';

import { addMessage } from '../../../../actions';
import { removeMessage } from '../../../../actions';


class MessagePresental extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.handChange = this.handChange.bind(this);
    this.deleteTeMessage = this.deleteTeMessage.bind(this);
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

  deleteTeMessage = (index) => {
    this.props.deleteTeMessage(index);
    console.log(index);
  }



	
  render() {

    const listMessages = this.props.items.map((message, index) =>
      <li key={index}>
        {message}
        <span onClick={(e) => this.deleteTeMessage(index)} className="delete-message">Delete</span>
      </li>
    );


   return (
     

     <div className="comment">
       <textarea onChange={this.handChange} value={this.state.input} placeholder="What's on your mind?"/>
       <div>
         <button onClick={this.handleSend}>Post</button>
       </div>
       <ul className="listMessages">{listMessages}</ul>
     </div>
   );
  }
}



const mapStateToProps = (state) => {
  let arr = state.messagesReducer.arrMessages;
  return {
	  items: arr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      dispatch(addMessage(text))
    },
    deleteTeMessage: (index) => {
      dispatch(removeMessage(index))
    }
  }
}

const Message = connect(mapStateToProps, mapDispatchToProps)(MessagePresental)

export default Message;