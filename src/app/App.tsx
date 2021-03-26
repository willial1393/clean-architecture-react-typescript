import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {store} from './shared/store/store';
import AppRouter from './App.router';

function App() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default App;
