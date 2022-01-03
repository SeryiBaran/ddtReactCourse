import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./StateTest.css";

class StateTest extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { liveTime: 3,  hide: false};
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
    if (!this.state.liveTime > 0) {
      clearInterval(this.timerID);
      this.setState({
        hide: true,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.hide && <h2>Эта надпись исчезнет через {this.state.liveTime} секунд!</h2>}
      </div>
    );
  }
}

export default StateTest;
