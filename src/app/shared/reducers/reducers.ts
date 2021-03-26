import {combineReducers} from 'redux';
import {UserReducer} from './user.reducer';

export const Reducers = combineReducers({
    user: UserReducer
})
