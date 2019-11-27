import React from "react";
import ReactDOM from "react-dom";

function BreakInterval(props){
    return(
        <section>
        <button>Down</button>
        <p> {props.test} </p>
        <button>UP</button>
        </section>
    )
}

export default BreakInterval;