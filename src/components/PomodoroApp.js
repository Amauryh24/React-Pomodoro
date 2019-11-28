import React from "react";
import ReactDOM from "react-dom";
import BreakTime from "./BreakTime";
import PomodoroTime from "./PomodoroTime";
import Timer from "./Timer";

class PomodoroApp extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      pomodoroLength: 20,
      timerMinutes: 25
    };

    this.upBreakTime = this.upBreakTime.bind(this);
    this.downBreakTime = this.downBreakTime.bind(this);

    this.upPomodoroTime = this.upPomodoroTime.bind(this);
    this.downPomodoroTime = this.downPomodoroTime.bind(this);

    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
  }
  upBreakTime() {
    this.setState(par => {
      return {
        breakLength: par.breakLength + 1
      };
    });
  }
  downBreakTime() {
    this.setState(par => {
      return {
        breakLength: par.breakLength - 1
      };
    });
  }
  upPomodoroTime() {
    this.setState(par => {
      return {
        pomodoroLength: par.pomodoroLength + 1,
        timerMinutes: par.pomodoroLength + 1
      };
    });
  }
  downPomodoroTime() {
    this.setState(par => {
      return {
        pomodoroLength: par.pomodoroLength - 1,
        timerMinutes: par.pomodoroLength - 1
      };
    });
  }
  onUpdateTimerMinute() {
    this.setState(par => {
      return {
        timerMinutes: par.timerMinutes - 1
      };
    });
  }
  onToggleInterval(isPomodoro) {
    if (isPomodoro) {
      this.setState({
        timerMinutes: this.state.pomodoroLength
      });
    } else {
      this.setState({
        timerMinutes: this.state.breakLength
      });
    }
  }

  render() {
    return (
      <div>
        <main>
          <BreakTime
            break={this.state.breakLength}
            increaseCounter={this.upBreakTime}
            decreaseCounter={this.downBreakTime}
          />

          <PomodoroTime
            pomodoro={this.state.pomodoroLength}
            increaseCounter={this.upPomodoroTime}
            decreaseCounter={this.downPomodoroTime}
          />

          <Timer
            timerMinutes={this.state.timerMinutes}
            breakLength={this.state.breakLength}
            UpdateTimerMinute={this.state.onUpdateTimerMinute}
            ToggleInterval={this.state.onToggleInterval}
          />
        </main>
      </div>
    );
  }
}

export default PomodoroApp;
