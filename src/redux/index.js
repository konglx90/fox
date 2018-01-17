import { combineReducers } from 'redux';

import { versionReducers } from './version-redux';
import { newsReducers } from './news-redux';

export default combineReducers({
    ...versionReducers,
    ...newsReducers,
});
