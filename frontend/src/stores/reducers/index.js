import { combineReducers } from 'redux';

import authReducer from './authReducer';
import usernameReducer from './usernameReducer';
export default combineReducers({
  authentification: authReducer,
  user:usernameReducer
});