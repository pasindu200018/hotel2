
import { combineReducers } from 'redux';
import ChatReducer from './Chat';
import ChatPopupReducer from './ChatPopup';
import EmailReducer from './Email';
import Theme from './Theme';
import ToDoReducer from './ToDo';
import { apiSlice } from './api/apiSlice';

const reducers = combineReducers({
    theme: Theme,
    chatReducer: ChatReducer,
    emailReducer: EmailReducer,
    chatPopupReducer: ChatPopupReducer,
    toDoReducer: ToDoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export default reducers;