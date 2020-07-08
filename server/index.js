const express = require('express');
import { renderToString } from 'react-dom/server';

import Home from '../client/src/components/home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 5000');
});
