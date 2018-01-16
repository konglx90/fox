/**
 * @desc [登录注销账号相关redux]
 */
import { createAction } from '../utils/createRedux';

/* Constants */
const GET_VERSION = 'GET_VERSION';
const GET_VERSION_SUCCESS = 'GET_VERSION_SUCCESS';
const GET_VERSION_FAIL = 'GET_VERSION_FAIL';

export const VersionTypes = {
  GET_VERSION,
  GET_VERSION_SUCCESS,
  GET_VERSION_FAIL,
};

/* Action Creators */
export const versionActions = {
  version: createAction(GET_VERSION),
  versionSuccess: createAction(GET_VERSION_SUCCESS),
  versionFail: createAction(GET_VERSION_FAIL)
};

const initialState = {
  version: '',
};

/* Reducers */
const versionReducer = (state = initialState, action) => {
  const type = action && action.type;

  switch(type) {
    case GET_VERSION:
        return state;
    case GET_VERSION_SUCCESS:
      return {
        ...state,
        version: action.payload,
      }
    case GET_VERSION_FAIL:
      return state;
    default:
      return state;
  }
}

export const versionReducers = {
  version: versionReducer
};
