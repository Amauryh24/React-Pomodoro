import React from "react";
import ReactDOM from "react-dom";
import BreakTime from "./BreakTime"
import PomodoroTime from "./PomodoroTime"

console.log('test');


class PomodoroApp extends React.Component {
    constructor(){
        super();

        this.state = {
            breakLength : 5,
            pomodoroLength: 20
        }
    }
 render(){
 return (
        <div>
            <main>
            It's work !
            <BreakTime break={this.state.breakLength} />
            <PomodoroTime pomodoro={this.state.pomodoroLength} />
            </main>
        </div>
    );
 }
   
}


export default PomodoroApp;