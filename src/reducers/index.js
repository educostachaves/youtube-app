import { combineReducers } from 'redux';

import videos from './videos';

const rootReducer = combineReducers({
  videos: videos
});

export default rootReducer;
