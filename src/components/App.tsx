import React from 'react';

import photo from '../img/ezh.jpg';
import styles from './App.module.css';

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

const NAME = 'ddtReactCourse';

const App: React.FC = () => {
  return (
    <>
      <div id="app">
        <header className={styles.header}>
          <h1>Здравствуй, {NAME}!</h1>
          <p>Этот сайт написан на React и бесплатно задеплоен на Vercel.App.</p>
        </header>
        <Indent />
        <h2 className={styles.clock}>
          Время: <Clock />
        </h2>
        <Indent />
        <Whoim />
        <Indent />
        <EffectTest />
        <Indent />
        <StateTest />
        <Indent />
        <Card
          name="-"
          lastname="-"
          birth="-"
          gender="-"
          diagnosis="-"
          photo={photo}
          photoDescription="В спокойном состоянии ↑"
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
      </div>
    </>
  );
};

export default App;
