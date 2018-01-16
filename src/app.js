import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux';
import AppPage from './pages/app-page';

const middleware = [];

const store = createStore(
    reducers,
    {},
    applyMiddleware(...middleware),
);

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <AppPage />
            </Provider>
        );
    }
}
