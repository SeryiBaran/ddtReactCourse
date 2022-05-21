import React from 'react';
import styled from 'styled-components';
import { ReactLocation, Outlet, Router } from '@tanstack/react-location';

import '../standard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { GlobalStyle } from '../styles/global';
import { Header, HeaderLinks, HeaderLink } from './Header/Header';
import { Index } from './Index';
import { Second } from './Second';

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

const TextLogo = styled.span`
  font-size: 1.6em;
`;

export const App: React.FC = () => {
  return (
    <div id="app">
      <GlobalStyle />
      <Router location={reactLocation} routes={routes}>
        <Header>
          <TextLogo>
            <a
              href="https://github.com/SeryiBaran/ddtReactCourse"
              title="GitHub"
            >
              SB/ddtRC
            </a>
          </TextLogo>
          <HeaderLinks>
            <HeaderLink to="/">Index.tsx</HeaderLink>
            <HeaderLink to="second">Second.tsx</HeaderLink>
          </HeaderLinks>
        </Header>
        <Outlet />
      </Router>
    </div>
  );
};
