import React from "react";

function BreakTime(props) {
  function decreaseCounter() {
    if (props.break === 1) {
      return;
    }
    props.decreaseCounter();
  }
  function increaseCounter() {
    if (props.break === 60) {
      return;
    }
    props.increaseCounter();
  }
  return (
    <section>
      <button onClick={decreaseCounter}>Down</button>
      <h3> {props.break} </h3>
      <button onClick={increaseCounter}>Up</button>
    </section>
  );
}

export default BreakTime;
