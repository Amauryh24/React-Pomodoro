import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPomodoro: true,
      timerSecondes: 0,
      intervalId: 0
    };
    this.playTimer = this.playTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  playTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId
    });
  }
  decreaseTimer() {
    switch (this.state.timerSecondes) {
      case 0:
        this.props.UpdateTimerMinute();
        this.setState({
          timerSecondes: 59
        });
        break;

      default:
        this.setState(par => {
          return {
            timerSecondes: par.timerSecondes - 1
          };
        });
        break;
    }
  }
  stop() {}

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
        <button onClick={this.playTimer}>play</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.refresh}>refresh</button>
      </section>
    );
  }
}

export default Timer;
