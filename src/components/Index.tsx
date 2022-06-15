import { FC } from 'react';
import styled from 'styled-components';

import photo from '@/img/ezh.jpg';

import { Clock } from '@/components/Clock';
import { Whoim } from '@/components/Whoim';
import { EffectTest } from '@/components/EffectTest';
import { StateTest } from '@/components/StateTest';
import { Card } from '@/components/Card';
import { Timer } from '@/components/Timer';
import { Indent } from '@/components/Indent';
import { CatsAPITest } from '@/components/CatsAPITest';
import { ChartJsTest } from '@/components/ChartJsTest';
import { InputTest } from '@/components/InputTest';
import { Counter } from '@/components/Counter';
import { Button } from '@/components/Button';
import { TableTest } from '@/components/TableTest';
import { ClassTest } from '@/components/ClassTest';
import { UserCards } from '@/components/UserCards';
import { RecoilTest } from '@/components/RecoilTest';

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

export const Index: FC = () => {
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
