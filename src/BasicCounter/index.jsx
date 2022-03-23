import { useState, useReducer } from 'react'


const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    CLEAR: 'clear'
}


function reducer(state, action) {

    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        case ACTIONS.CLEAR:
            return { count: state.count - state.count }
        default:
            return state
    }

}


export function BasicCounter() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [count, setCount] = useState(0)

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    function clear() {
        dispatch({ type: ACTIONS.CLEAR })
    }

    return (

        <div className="basic-counter">

            <button onClick={decrement}> - </button>
            <span className="counter-number">{state.count}</span>
            <button onClick={increment}> + </button>
            <button onClick={clear}> clear </button>

        </div>

    )

}