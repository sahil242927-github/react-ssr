import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import newsReducer from './newsReducer';
//import currentPageReducer from './currentPageReducer';

export default combineReducers({
  users: usersReducer,
  news: newsReducer,
  //currentPage: currentPageReducer,
});
