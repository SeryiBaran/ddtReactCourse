import React from 'react';
import styles from './Clock.module.css';

interface isState {
  date: Date;
}

class Clock extends React.Component<any, isState> {
  timerID: number;

  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      this.state.date.toLocaleTimeString()
    );
  }
}

export default Clock;
