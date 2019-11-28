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
      <h2>Break-Time</h2>
      <div class="break-time">
        <a
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseCounter}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
          </svg>
        </a>
        <p> {props.break} </p>
        <a
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseCounter}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default BreakTime;
