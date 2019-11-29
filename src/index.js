import React from "react";
import ReactDOM from "react-dom";
import PomodoroApp from "./components/pomodoro-app";
import "./styles.scss";

const mountNode = document.querySelector("#app");
ReactDOM.render(<PomodoroApp />, mountNode);
