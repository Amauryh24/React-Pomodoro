import React from "react";
import ReactDOM from "react-dom";

function BreakTime(props){
    return(
        <section>
        <button>Down</button>
        <p> {props.break} </p>
        <button>UP</button>
        </section>
    )
}

export default BreakTime;