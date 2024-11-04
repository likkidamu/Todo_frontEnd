import { useState } from 'react';
import './Counter.css';
import CounterB from './CounterB';
export default function Counter() {
    const [fcount, setCount] = useState(0);
    function ParentincrementOnClick(BY) {
        setCount((prevCount) => prevCount + BY); // Use BY instead of by
        console.log(fcount + BY); // Log the updated count after increment
        console.log("clickedIncrement");
    }
    function ParentdecrementOnClick(BY) {
            setCount((prevCount) => prevCount - BY); // Use BY instead of by
            console.log(fcount - BY); // Log the updated count after decrement
            console.log("clickedDecrement");
        }
    function ResetOnClick(){
        setCount((prevCount) => prevCount=0);

    }
    return (
        <>
            <CounterB BY={1} onIncrement={ParentincrementOnClick} onDecrement={ParentdecrementOnClick} />
            <CounterB BY={2} onIncrement={ParentincrementOnClick} onDecrement={ParentdecrementOnClick} />
            <CounterB BY={5} onIncrement={ParentincrementOnClick} onDecrement={ParentdecrementOnClick}/>
            <div className="totalCount">{fcount}</div>
            <button className="ResetButton" onClick={ResetOnClick}> Reset </button>
        </>
    );
    
}

