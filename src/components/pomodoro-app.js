import React from "react";
import ReactDOM from "react-dom";
import BreakTime from "./break-time";
import PomodoroTime from "./pomodoro-time";
import Timer from "./timer";

class PomodoroApp extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      pomodoroLength: 25,
      timerMinutes: 25,
      isPlay: false
    };

    this.upBreakTime = this.upBreakTime.bind(this);
    this.downBreakTime = this.downBreakTime.bind(this);


    this.upPomodoroTime = this.upPomodoroTime.bind(this);
    this.downPomodoroTime = this.downPomodoroTime.bind(this);


    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
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
      TimerMinute();
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
  onResetTimer() {
    this.setState({
      timerMinutes: this.state.pomodoroLength
    });
  }
    onPlayStopTimer(isPlay){
        this.setState({
            isPlay:isPlay
        })
    }


  render() {
    return (
      <div>
        <main>
          <BreakTime
            isPlay={this.state.isPlay} // disable button when break is working
            break={this.state.breakLength}
            increaseCounter={this.upBreakTime}
            decreaseCounter={this.downBreakTime}
          />

          <PomodoroTime
            isPlay={this.state.isPlay} // disable button when pomo is working
            pomodoro={this.state.pomodoroLength}
            increaseCounter={this.upPomodoroTime}
            decreaseCounter={this.downPomodoroTime}
          />

          <Timer
            timerMinutes={this.state.timerMinutes}
            breakLength={this.state.breakLength}
            UpdateTimerMinute={this.onUpdateTimerMinute}
            ToggleInterval={this.onToggleInterval}
            resetTimer={this.onResetTimer}
            onplayStopTimer={this.onPlayStopTimer}
          />
        </main>
      </div>
    );
  }
}

export default PomodoroApp;
