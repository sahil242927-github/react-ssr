import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderer from './helper/renderer';
import createStore from './helper/createStore';
import Routes from '../client/src/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = createStore();

  // we need the components on the user's requested route before loading the application
  // matchRoutes(Routes, req.path) => will return user’s requested route and required components
  // loadData  will return all the promises.
  const promises = matchRoutes(Routes, req.path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );

  try {
    // calling all the pending network request and render the page once all the requests done
    Promise.all(promises).then(() => {
      res.send(renderer(req, store));
    });
  } catch (err) {
    console.log('Error: ', error);
  }
});

app.listen(5000, () => {
  console.log('\nListening on port 5000');
});
