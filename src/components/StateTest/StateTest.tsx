import React from 'react';
import './StateTest.css';

interface isState {
  liveTime: number;
  hide: boolean;
}

class StateTest extends React.Component<any, isState> {
  timerID: number;

  constructor(props: any) {
    super(props);
    this.state = { liveTime: 10, hide: false };
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
      liveTime: this.state.liveTime - 1,
    });
    if (this.state.liveTime < 1) {
      clearInterval(this.timerID);
      this.setState({
        hide: true,
      });
    }
  }

  render() {
    return (
      <div id="stateTest">
        {!this.state.hide && (
          <h2>Эта надпись исчезнет через {this.state.liveTime} секунд!</h2>
        )}
      </div>
    );
  }
}

export default StateTest;
