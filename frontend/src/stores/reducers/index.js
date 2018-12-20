import { combineReducers } from 'redux';

import authReducer from './authReducer';
import usernameReducer from './usernameReducer';
import challengeReducers from './challengeReducers';

export default combineReducers({
  authentification: authReducer,
  user:usernameReducer,
  challenges: challengeReducers
});