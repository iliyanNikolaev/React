import React from "react";

const Timer = (props) => {
    
    let [seconds, setSeconds] = React.useState(Number(props.start));
    
    setTimeout(() => {
        if(seconds >= 10){
            setSeconds(0);
        } else{
            setSeconds(++seconds)
        }
    }, 1000);

    return <p>Timer: {seconds}s</p>
}

export default Timer;