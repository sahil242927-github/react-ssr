import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchNews, prevAction, nextAction } from '../../actions';
import Chart from '../../components/Chart';
import './index.scss';

const styles = {
  tableHeader: {
    width: '70%',
    margin: 'auto',
  },
  buttonContainer: {
    margin: '10px',
    textAlign: 'right',
  },
};

const Home = ({ news, currentPage, prevAction, nextAction }) => {
  // chart data
  const points = [];
  const ids = [];

  useEffect(() => {
    fetchNews();
  }, []);

  const renderNews = () => {
    const tableBody = news.map((news) => {
      // filling chart data here saves a loop
      ids.push(news.objectID);
      points.push(news.points);

      let hour = new Date(news.created_at).getHours() > 1 ? 'hours' : 'hour';

      return (
        <tr key={news.objectID}>
          <td>
            <p class='lead'>{news.num_comments}</p>
          </td>
          <td>
            <p class='lead'>{news.points}</p>
          </td>
          <td>
            <span>&#8679;</span>
          </td>
          <td>
            {news.title}{' '}
            <small>
              <span className='text-secondary'>
                {news.url && news.url.split('/').splice(0, 3).join('/')} by{' '}
              </span>
              {news.author}{' '}
              <span className='text-secondary'>
                {new Date(news.created_at).getHours()} {hour} ago{' '}
              </span>
            </small>
          </td>
        </tr>
      );
    });

    return (
      <table className='home table table-striped'>
        <thead className='tblHeading'>
          <tr>
            <th scope='col'>Comments</th>
            <th scope='col'>Vote Count</th>
            <th scope='col'>upVote</th>
            <th scope='col'>New Details</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    );
  };

  return (
    <div style={styles.tableHeader}>
      Here is list of News
      {renderNews()}
      <div style={styles.buttonContainer}>
        {currentPage ? (
          <button
            type='button'
            className='btn btn-primary mr-1'
            onClick={() => prevAction(currentPage)}
          >
            Prev
          </button>
        ) : (
          ''
        )}

        <button
          type='button'
          className='btn btn-danger'
          onClick={() => nextAction(currentPage)}
        >
          Next
        </button>
      </div>
      <div style={{ height: '500px', width: '100%' }}>
      
        <Chart points={points} ids={ids} />
      </div>
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchNews(store.getState().news.currentPage));
};

const mapStateToProps = (state) => {
  return { news: state.news.hits, currentPage: state.news.currentPage };
};

export default {
  component: connect(mapStateToProps, { fetchNews, prevAction, nextAction })(
    Home
  ),
  loadData,
};

Home.defaultProps = {
  currentPage: 1,
};
