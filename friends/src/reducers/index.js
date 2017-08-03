import { combineReducers } from 'redux';
import friendsReducer from './friends';

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;