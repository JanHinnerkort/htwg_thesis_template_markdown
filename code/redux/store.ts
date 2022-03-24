import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    user: authReducer,
    todo: todoReducer,
    filter: filterReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools());
