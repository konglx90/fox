// TODO remove Reactotron
import './config/reactotron-config';

import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './redux/configureStore';
import RootNavigator from './routes';
import DebugConfig from './config/debug-config';

let { store, persistor } = configureStore();

const loading = () => <Text>loading...</Text>;

class App extends Component<{}> {
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

// TODO remove Reactotron
// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
