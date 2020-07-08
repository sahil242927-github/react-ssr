import { FETCH_NEWS, NEXT_PAGE, PREV_PAGE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...action.payload.res.data,
        currentPage: action.payload.currentPage,
      };
    case NEXT_PAGE:
      return {
        ...state,
        ...action.payload.res.data,
        currentPage: action.payload.currentPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        ...action.payload.res.data,
        currentPage: action.payload.currentPage - 1,
      };
    default:
      return state;
  }
};
