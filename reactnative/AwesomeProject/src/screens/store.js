import {combineReducers, createStore} from 'redux';
import reducer from '../screens/reducer';


const reducers = combineReducers({
    reducer
})


export const store= createStore(reducers,{});