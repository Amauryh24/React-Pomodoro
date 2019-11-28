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
      <button onClick={decreaseCounter}>Down</button>
      <p> {props.pomodoro} </p>
      <button onClick={increaseCounter}>Up</button>
    </section>
  );
}