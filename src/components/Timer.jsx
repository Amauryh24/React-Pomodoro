import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPomodoro: true,
      timerSecondes: 0
    };
  }

  render() {
    return (
      <section>
        <h3> {this.state.isPomodoro === true ? "Pomodoro" : "Break"} </h3>
        <span> {this.props.timerMinutes} </span>
        <span>:</span>
        <span>
          {this.state.timerSecondes === 0
            ? "00"
            : this.state.timerSecondes < 10
            ? "0" + timerSecondes
            : this.state.timerSecondes}
        </span>
        <button>play</button>
        <button>stop</button>
        <button>refresh</button>
      </section>
    );
  }
}

export default Timer;
