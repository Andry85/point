const ADD_MESSAGE = 'ADD_MESSAGE'
const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export const addMessage = (text) => ({
  type: ADD_MESSAGE,
  text
})

export const removeMessage = (index) => ({
  type: REMOVE_MESSAGE,
  index
})






