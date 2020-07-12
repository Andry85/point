import { combineReducers } from 'redux';
import messagesReducer from './controlMessage';

import { items, itemsHasErrored, itemsIsLoading } from './fetchDataThunkReducer';


export default combineReducers({
    messagesReducer,
    items,
    itemsHasErrored,
    itemsIsLoading
})