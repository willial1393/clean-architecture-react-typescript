import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import {Reducers} from '../reducers/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';


export const store = createStore(
    Reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);
