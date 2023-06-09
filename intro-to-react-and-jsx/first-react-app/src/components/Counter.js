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

    return <article>
        <h3>Counter {counter}</h3>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={resetClick}>Reset</button>
        <button onClick={decrementClick}>Decrement</button>

    </article>
}

export default Counter;