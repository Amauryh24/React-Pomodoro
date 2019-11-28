import React from "react";

export default function PomodoroTime(props) {
  function decreaseCounter() {
    if (props.pomodoro === 1) {
      return;
    }
    props.decreaseCounter();
  }
  function increaseCounter() {
    if (props.pomodoro === 60) {
      return;
    }
    props.increaseCounter();
  }

  return (
    <section>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseCounter}
      >
        Down
      </button>
      <p> {props.pomodoro} </p>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}
      >
        Up
      </button>
    </section>
  );
}
