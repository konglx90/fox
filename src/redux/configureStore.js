import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import REDUX_PERSIST from '../config/redux-persist-config';
import rootReducer from './index';
import rootSagas from '../sagas';

// redux persist
const persistedReducer = persistReducer(REDUX_PERSIST.storeConfig, rootReducer);

// middleware
const middleware = [];

// saga middleware
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export default () => {
    let store = createStore(
        persistedReducer,
        {},
        applyMiddleware(...middleware)
    );
    // run sagas
    sagaMiddleware.run(rootSagas);
    
    let persistor = persistStore(store);
    return { store, persistor };
}
