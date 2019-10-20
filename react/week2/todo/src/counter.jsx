import React from "react";

class Counter extends React.Component {
  state = { counter: this.props.initialCounter, isRunning: true, delta: 1 };

  componentDidMount() {
    setInterval(() => {
      if (
        this.state.isRunning &&
        (this.state.delta > 0 ||
          (this.state.delta < 0 && this.state.counter > 0))
      ) {
        this.setState({ counter: this.state.counter + this.state.delta });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.counter}
      </div>
    );
  }
}

export default Counter;
