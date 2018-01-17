/**
 * @desc [应用版本]
 */
import produce from "immer";
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
    return produce(state, draft => {
        switch(type) {
        case GET_VERSION_SUCCESS:
            draft.version = action.payload;
        }
  });
}

export const versionReducers = {
  version: versionReducer
};
