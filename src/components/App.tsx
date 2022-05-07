import React from 'react';
import styled from 'styled-components';
import { ReactLocation, Outlet, Router, Link } from '@tanstack/react-location';

import Header from './Header/Header';
import Index from './Index';
import Second from './Second';

const reactLocation = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'second',
    element: <Second />,
  },
];

const HeaderLinks = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    user-select: none;
    background: rgb(212, 75, 56);
    padding: 0.7em 1.5em;
    outline: none;
    margin-right: 1em;
    display: inline-block;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const TextLogo = styled.span`
  font-size: 2em;
`;

const App: React.FC = () => {
  return (
    <div id="app">
      <Router location={reactLocation} routes={routes}>
        <Header>
          <TextLogo>
            <a
              href="https://github.com/SeryiBaran/ddtReactCourse"
              title="GitHub"
            >
              SeryiBaran/ddtReactCourse
            </a>
          </TextLogo>
          <HeaderLinks>
            <Link to="/">Index.tsx</Link>
            <Link to="second">Second.tsx</Link>
          </HeaderLinks>
        </Header>
        <Outlet />
      </Router>
    </div>
  );
};

export default App;
