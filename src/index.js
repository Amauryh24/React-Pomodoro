import React from "react";
import ReactDOM from "react-dom";
import PomodoroApp from "./components/pomodoro-app";
import "./styles.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(<PomodoroApp />, mountNode);