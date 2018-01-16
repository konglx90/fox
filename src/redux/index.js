import { combineReducers } from 'redux';

import { versionReducers } from './version-redux';

export default combineReducers({
    ...versionReducers
});
