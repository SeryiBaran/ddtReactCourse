import React from 'react';
import styled from 'styled-components';

import photo from '../img/ezh.jpg';

import { Clock } from './Clock/Clock';
import { Whoim } from './Whoim/Whoim';
import { EffectTest } from './EffectTest/EffectTest';
import { StateTest } from './StateTest/StateTest';
import { Card } from './Card/Card';
import { Timer } from './Timer/Timer';
import { Indent } from './Indent/Indent';
import { CatsAPITest } from './CatsAPITest/CatsAPITest';
import { ChartJsTest } from './ChartJsTest/ChartJsTest';
import { InputTest } from './InputTest/InputTest';
import { Counter } from './Counter/Counter';
import { Button } from './Button/Button';
import { TableTest } from './TableTest/TableTest';
import { ClassTest } from './ClassTest/ClassTest';

const NAME = 'ddtReactCourse';

const data = {
  thead: [1, 2, 3, 4, 5],
  tbody: [
    [11, 22, 33, 44, 55],
    [11, 22, 33, 44, 55],
    [11, 22, 33, 44, 55],
  ],
};

const Head = styled.div`
  font-size: 18px;
  text-align: center;
  h1 {
    margin: 0;
    padding: 0.67em 0;
  }
`;

const ClockH2 = styled.h2`
  text-align: center;
`;

const StyledIndex = styled.div`
  padding: 0.8rem;
`;

export const Index: React.FC = () => {
  return (
    <StyledIndex id="index">
      <Head>
        <h1>Здравствуй, {NAME}!</h1>
        <p>Этот сайт написан на React и бесплатно задеплоен на Vercel.App.</p>
      </Head>
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
    </StyledIndex>
  );
};
