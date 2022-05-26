import React from 'react';
import styled from 'styled-components';

import photo from '../img/ezh.jpg';

import { Clock } from './Clock';
import { Whoim } from './Whoim';
import { EffectTest } from './EffectTest';
import { StateTest } from './StateTest';
import { Card } from './Card';
import { Timer } from './Timer';
import { Indent } from './Indent';
import { CatsAPITest } from './CatsAPITest';
import { ChartJsTest } from './ChartJsTest';
import { InputTest } from './InputTest';
import { Counter } from './Counter';
import { Button } from './Button';
import { TableTest } from './TableTest';
import { ClassTest } from './ClassTest';
import { UserCards } from './UserCards';
import { RecoilTest } from './RecoilTest';

const NAME: string = 'ddtReactCourse';

const data = {
  thead: ['Заголовок', 'Заголовок', 'Заголовок', 'Заголовок', 'Заголовок'],
  tbody: [
    ['Столбец', 'Столбец', 'Столбец', 'Столбец', 'Столбец'],
    ['Столбец', 'Столбец', 'Столбец', 'Столбец', 'Столбец'],
    ['Столбец', 'Столбец', 'Столбец', 'Столбец', 'Столбец'],
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
      <UserCards />
      <Indent />
      <RecoilTest />
      <RecoilTest />
    </StyledIndex>
  );
};
