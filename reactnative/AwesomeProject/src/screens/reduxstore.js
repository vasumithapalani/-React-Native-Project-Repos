import {combineReducers, createStore} from 'redux';
import authReducer from '../screens/authReducer';



const reducers = combineReducers({
    authReducer
})


export const store= createStore(reducers,{});