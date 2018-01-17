/**
 * @desc [saga注册入口文件]
 */
import { fork, all } from 'redux-saga/effects';
import VersionSaga from './version-sagas';
/* ------------- Sagas ------------- */
// use redux-saga to manage the asynchronous tasks
const sagas = all([
    ...VersionSaga,
]);

/* ------------- Connect Types To Sagas ------------- */
export default function * root() {
    yield sagas.map(saga => fork(saga));
};
