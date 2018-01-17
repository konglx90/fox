import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import REDUX_PERSIST from '../config/redux-persist-config';
import DEBUG_CONFIG from '../config/debug-config';
import rootReducer from './index';
import rootSagas from '../sagas';

// redux persist
const persistedReducer = persistReducer(REDUX_PERSIST.storeConfig, rootReducer);

// middleware
const middleware = [];

// saga middleware
// TODO remove Reactotron
const sagaMonitor = DEBUG_CONFIG.useReactotron ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(sagaMiddleware);

export default () => {
    // TODO remove Reactotron
    const _createStore = DEBUG_CONFIG.useReactotron ? Reactotron.createStore : createStore;

    let store = _createStore(
        persistedReducer,
        {},
        applyMiddleware(...middleware)
    );
    // run sagas
    sagaMiddleware.run(rootSagas);

    let persistor = persistStore(store);
    return { store, persistor };
}
