import React from 'react';
import ReactDOM from 'react-dom';

import photo from './img/ezh.jpg';
import './standard.css';
import './index.css';
import App from './components/App/App';
import Clock from './components/Clock/Clock';
import Whoim from './components/Whoim/Whoim';
import EffectTest from './components/EffectTest/EffectTest';
import StateTest from './components/StateTest/StateTest';
import Card from './components/Card/Card';
import Timer from './components/Timer/Timer';
import Indent from './components/Indent/Indent';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Indent />
    <h2 className="clock">Время: <Clock /></h2>
    <Indent />
    <Whoim />
    <Indent />
    <EffectTest />
    <Indent />
    <StateTest />
    <Indent />
    <Card
      name="ХЗ"
      lastname="ХЗ"
      birth="ХЗ"
      gender="ХЗ"
      diagnosis="Обижен на всех"
      photo={photo}
      photoDescription="В спокойном состоянии ↑"
      size={1}
    />
    <Timer />
    <Indent />
  </React.StrictMode>,
  document.getElementById('root'),
);
