import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Clock.css";

class Clock extends React.Component {
  timerID: any;
  state: any;
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
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
      <div>
        <h2 className="Clock">Время: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
