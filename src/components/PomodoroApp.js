import React from "react";
import ReactDOM from "react-dom";
import BreakTime from "./BreakTime"

console.log('test');


class PomodoroApp extends React.Component {
    constructor(){
        super();

        this.state = {
            breakLength : 5,
            sessionLength: 20
        }
    }
 render(){
 return (
        <div>
            <main>
            It's work !
            <BreakTime break={this.state.breakLength} />
            </main>
        </div>
    );
 }
   
}


export default PomodoroApp;