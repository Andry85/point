import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './message.css';

import { addMessage } from '../../../../actions';
import { removeMessage } from '../../../../actions';
import { editOldMessage } from '../../../../actions';





class MessagePresental extends Component {

  constructor(props) {
    super(props)

    this.editForm = React.createRef();

    this.state = {
      input: '',
      visibilityEditForm: false,
      editAreaText: '',
      indexEdited: null
    }

    this.handChange = this.handChange.bind(this);
    this.handChangeEditArea = this.handChangeEditArea.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this);
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

  editMessage = (index, message) => {

    console.log(index);
    this.setState(state => ({
      input: '',
      visibilityEditForm: true,
      editAreaText: message,
      indexEdited: index
    }));

   this.editForm.current.focus();
  }

  handChangeEditArea(e) {
    this.setState({
      editAreaText: e.target.value
    });
  }


  handleEditSave(e) {
    e.preventDefault();
    this.props.sendEditedMessage(this.state.editAreaText, this.state.indexEdited);
    this.setState({
      editAreaText: '',
      visibilityEditForm: false,
    });
  }




	
  render() {

    const listMessages = this.props.items.map((message, index) =>
      <li key={index}>
        <i>{message}</i>

        <span onClick={(e) => this.editMessage(index, message)} className="edit-message">Edit</span>
        <span onClick={(e) => this.deleteTeMessage(index)} className="delete-message">Delete</span>
      </li>
    );


   return (
     

     <div className="comment">
       <textarea   
                  onChange={this.handChange} 
                  value={this.state.input} 
                  placeholder="What's on your mind?"/>
       <div>
         <button onClick={this.handleSend}>Post</button>
       </div>
       <ul className="listMessages">{listMessages}</ul>
       <div className={
          this.state.visibilityEditForm ? 'edit-form visible' : 'edit-form'
        }>
          <textarea 
          ref={this.editForm}  
          value={this.state.editAreaText}  
          placeholder="Change Text"
          onChange={this.handChangeEditArea}
           />
          <button onClick={this.handleEditSave}>Save</button>
       </div>
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
    },
    sendEditedMessage: (text, index) => {
      dispatch(editOldMessage(text, index))
    },
  }
}

const Message = connect(mapStateToProps, mapDispatchToProps)(MessagePresental)

export default Message;