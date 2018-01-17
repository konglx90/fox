import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './redux/configureStore';
import RootNavigator from './routes';

let { store, persistor } = configureStore();

const loading = () => <Text>loading...</Text>;

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={loading()} persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
