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
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  playTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onplayStopTimer(true);
    this.setState({
      intervalId: intervalId
    });
  }
  decreaseTimer() {
    switch (this.state.timerSecondes) {
      case 0:
        if (this.props.timerMinutes === 0) {
          if (this.state.isPomodoro) {
            this.setState({
              isPomodoro: false
            });

            this.props.ToggleInterval(this.state.isPomodoro);
          } else {
            this.setState({
              isPomodoro: true
            });

            this.props.ToggleInterval(this.state.isPomodoro);
          }
        } else {
          this.props.UpdateTimerMinute();
          this.setState({
            timerSecondes: 59
          });
        }

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
  stopTimer() {
    clearInterval(this.state.intervalId);
    this.props.onplayStopTimer(false);
  }
  resetTimer() {
    this.stopTimer();
    this.props.resetTimer();
    this.props.onplayStopTimer(false);
    this.setState({
      timerSecondes: 0,
      isPomodoro: true
    });
  }
  render() {
    return (
      <section class="section-timer">
        <h3> {this.state.isPomodoro === true ? "Pomodoro" : "Break"} </h3>
        <div class="timer">
          <p class="minutes"> {this.props.timerMinutes} </p>
          <p class="separateur">:</p>
          <p class="secondes">
            {this.state.timerSecondes === 0
              ? "00"
              : this.state.timerSecondes < 10
              ? "0" + this.state.timerSecondes
              : this.state.timerSecondes}
          </p>
        </div>
        <div>
          <button onClick={this.playTimer}>play</button>
          <button onClick={this.stopTimer}>stop</button>
          <button onClick={this.resetTimer}>reset</button>
        </div>
      </section>
    );
  }
}

export default Timer;
