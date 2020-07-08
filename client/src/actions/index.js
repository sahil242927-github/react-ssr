import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_NEWS = 'fetch_news';
export const PREV_PAGE = 'prev_page';
export const NEXT_PAGE = 'next_page';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchNews = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10`
    );

    dispatch({
      type: FETCH_NEWS,
      payload: { res, currentPage: page || 0 },
    });
  } catch (error) {
    console.log(error);
  }
};

export const prevAction = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=10`
    );

    dispatch({
      type: PREV_PAGE,
      payload: {
        res,
        currentPage: page || 0,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const nextAction = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=10`
    );

    dispatch({
      type: NEXT_PAGE,
      payload: {
        res,
        currentPage: page || 0,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
