const initialState = {
  arrMessages: [],
  blabla: 'bla'
}


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return Object.assign({}, state, {
          arrMessages: [...state.arrMessages, action.text]
        }) 
        break;  
      case 'REMOVE_MESSAGE':
        return Object.assign({}, state, {
          arrMessages: [
                        ...state.arrMessages.slice(0, action.index),
                        ...state.arrMessages.slice(action.index + 1)
                        ]
        }) 
        break; 
      case 'EDIT_MESSAGE':
        return Object.assign({}, state, {
          arrMessages: [
            ...state.arrMessages.slice(0, action.index),
            action.text,
            ...state.arrMessages.slice(action.index + 1)
            ]
        }) 
        break;  
      default:
        return state
    }
  }
  
  export default messagesReducer