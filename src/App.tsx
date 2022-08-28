import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import '@/standard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { generateKey } from '@/utils/key';

import { GlobalStyle } from '@/styles/global';

import { Header, HeaderLinks, HeaderLink } from '@/components';

import { Second, Index } from '@/pages';

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

export const App = () => {
  return (
    <div id="app">
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
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
          <Routes>
            {!!routes &&
              routes.map(route => {
                return (
                  <Route
                    path={route.path}
                    element={route.element}
                    key={generateKey()}
                  />
                );
              })}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};
