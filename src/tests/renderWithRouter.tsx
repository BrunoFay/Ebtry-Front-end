import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component: ReactNode, { route = '/' } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return ({
    ...render(
      <Router location={history.location} navigator={history}>
        {component}
      </Router>), history,
  });
};
export default renderWithRouter;