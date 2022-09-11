import { combineReducers } from 'redux';

import homeReducers from './Home/reducer';

const globalReducers = combineReducers({
  homeReducers,
});

export default globalReducers;
