import React from "react";
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
      <div id="clock">
        <h2 className="clock">Время: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
