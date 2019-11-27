import React from "react";
import ReactDOM from "react-dom";
import BreakInterval from "./BreakInterval"

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
            <BreakInterval test={this.state.breakLength} />
            </main>
        </div>
    );
 }
   
}


export default PomodoroApp;