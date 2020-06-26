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
      default:
        return state
    }
  }
  
  export default messagesReducer