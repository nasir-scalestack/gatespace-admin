import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import auth from './auth';

export default history =>
  combineReducers({
    user,
    auth,
    router: connectRouter(history),
  });
