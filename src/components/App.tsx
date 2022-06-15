import { FC } from 'react';
import styled from 'styled-components';
import { ReactLocation, Outlet, Router } from '@tanstack/react-location';
import { RecoilRoot } from 'recoil';

import '@/standard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { GlobalStyle } from '@/styles/global';
import { Header, HeaderLinks, HeaderLink } from '@/components/Header';
import { Index } from '@/components/Index';
import { Second } from '@/components/Second';

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

const TextLogo = styled.a`
  font-size: 1.6em;
`;

export const App: FC = () => {
  return (
    <div id="app">
      <RecoilRoot>
        <GlobalStyle />
        <Router location={reactLocation} routes={routes}>
          <Header>
            <TextLogo
              href="https://github.com/SeryiBaran/ddtReactCourse"
              title="GitHub"
            >
              SB/ddtRC
            </TextLogo>
            <HeaderLinks>
              <HeaderLink to="/">Index.tsx</HeaderLink>
              <HeaderLink to="second">Second.tsx</HeaderLink>
            </HeaderLinks>
          </Header>
          <Outlet />
        </Router>
      </RecoilRoot>
    </div>
  );
};
