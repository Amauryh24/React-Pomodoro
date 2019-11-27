import React from "react";
import ReactDOM from "react-dom";

function PomodoroTime(props){
    return(
        <section>
            <button>Down</button>
         <p> {props.pomodoro} </p>
            <button>Up</button>
        </section>

    )
}
export default PomodoroTime;