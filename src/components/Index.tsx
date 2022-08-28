import styled from 'styled-components';

import photo from '@/img/ezh.jpg';

import { generateKey } from '@/utils/key';

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

const NAME = 'ddtReactCourse';

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

export const Index = () => {
  return (
    <StyledIndex id="index">
      {[
        <Head>
          <h1>Здравствуй, {NAME}!</h1>
          <p>Этот сайт написан на React и бесплатно задеплоен на Vercel.App.</p>
        </Head>,
        <ClockH2>
          Время: <Clock />
        </ClockH2>,
        <Whoim />,
        <EffectTest />,
        <StateTest />,
        <Card
          name="Ёж"
          lastname="Ёжиков"
          birth="2022"
          gender="¯\_(ツ)_/¯"
          diagnosis="Бурчит"
          photo={photo}
          photoDescription="В спокойном состоянии"
        />,
        <Timer />,
        <CatsAPITest />,
        <ChartJsTest />,
        <InputTest />,
        <Counter />,
        <Button>123</Button>,
        <TableTest data={data} />,
        <ClassTest />,
        <UserCards />,
        <RecoilTest />,
        <RecoilTest />,
      ].map(elem => (
        <>
          <div key={generateKey()}>{elem}</div>
          <Indent key={generateKey()} />
        </>
      ))}
    </StyledIndex>
  );
};
