import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { VersionTypes, versionActions } from '../redux/version-redux';
import { getIOSVersion } from '../api/requestApi';

function* getVersion(action) {
   try {
      const version = yield call(getIOSVersion);
      // console.log(version, 'version get from sagas');
      yield put(versionActions.versionSuccess(version));
   } catch (e) {
      yield put(versionActions.versionFail(e.message));
   }
}

function* versionSaga() {
  yield takeLatest(VersionTypes.GET_VERSION, getVersion);
}

const versionSagas = [
    versionSaga,
];

export default versionSagas;
