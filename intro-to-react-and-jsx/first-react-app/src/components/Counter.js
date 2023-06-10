import React from "react"

const Counter = (props) => {
    let [counter, setCounter] = React.useState(0);
    
    const incrementClick = (e) => {
        setCounter(oldCounter => oldCounter + 1);
    }

    const decrementClick = (e) => {
        setCounter(oldCounter => oldCounter - 1);
    }

    const resetClick = (e) => {
        setCounter(0);
    }

    if(counter > 5){
        counter = 0;
    }

    return <article>
        <h3>{getTitle(counter)} .. {counter}</h3>
        {counter < 5 
        ? <button onClick={incrementClick}>Increment</button>
        : null}
        <button onClick={resetClick}>Reset</button>
        {counter !== 0 
        ? <button onClick={decrementClick}>Decrement</button>
        : null}
        

    </article>
}

function getTitle(counter){
    switch (counter){
        case 0: return 'Welcome to Mobile Legends!';
        case 1: return 'Enemy has been slain!';
        case 2: return 'Double kill!';
        case 3: return 'Triple kill!';
        case 4: return 'MANIAC!!';
        case 5: return 'SAVAGEEE!!!!';
        default: return 'Out of range';
    }
}

export default Counter;