import { createStore, applyMiddleware, combineReducers } from 'redux';
import { NavReducer } from './navReducer';

const reducer = combineReducers({
    navReducer: NavReducer,

});

const store = createStore(reducer)

export default store;