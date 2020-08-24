import React from 'react';
import { renderRoutes } from 'react-router-config';

import Routes from '../../Routes';
import './index.scss';

export default () => {
  return <div className='container'>{renderRoutes(Routes)}</div>;
};
