import React from 'react';
import styled from 'styled-components';

import photo from '../img/ezh.jpg';

import Clock from './Clock/Clock';
import Whoim from './Whoim/Whoim';
import EffectTest from './EffectTest/EffectTest';
import StateTest from './StateTest/StateTest';
import Card from './Card/Card';
import Timer from './Timer/Timer';
import Indent from './Indent/Indent';
import CatsAPITest from './CatsAPITest/CatsAPITest';
import ChartJsTest from './ChartJsTest/ChartJsTest';
import InputTest from './InputTest/InputTest';
import Counter from './Counter/Counter';
import Button from './Button/Button';
import TableTest from './TableTest/TableTest';
import ClassTest from './ClassTest/ClassTest';

const NAME = 'ddtReactCourse';

const data = {
  thead: [1, 2, 3, 4, 5],
  tbody: [
    [11, 22, 33, 44, 55],
    [11, 22, 33, 44, 55],
    [11, 22, 33, 44, 55],
  ],
};

const Header = styled.header`
  font-size: 18px;
  text-align: center;
`;

const ClockH2 = styled.h2`
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <div id="app">
      <Header>
        <h1>Здравствуй, {NAME}!</h1>
        <p>Этот сайт написан на React и бесплатно задеплоен на Vercel.App.</p>
      </Header>
      <Indent />
      <ClockH2>
        Время: <Clock />
      </ClockH2>
      <Indent />
      <Whoim />
      <Indent />
      <EffectTest />
      <Indent />
      <StateTest />
      <Indent />
      <Card
        name="Ёж"
        lastname="Ёжиков"
        birth="2022"
        gender="¯\_(ツ)_/¯"
        diagnosis="Бурчит"
        photo={photo}
        photoDescription="В спокойном состоянии"
        size={1}
      />
      <Timer />
      <Indent />
      <CatsAPITest />
      <Indent />
      <ChartJsTest />
      <Indent />
      <InputTest />
      <Indent />
      <Counter />
      <Indent />
      <Button>123</Button>
      <Indent />
      <TableTest data={data} />
      <Indent />
      <ClassTest />
      <Indent />
    </div>
  );
};

export default App;
