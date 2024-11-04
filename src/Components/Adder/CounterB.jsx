export default function CounterB({ BY, onIncrement, onDecrement}) {

    return (
        <div className="Counter">
            
            <div>
                <button className="CounterButton" onClick={()=>onIncrement(BY)}>
                    +{BY}
                </button>
                <button className="CounterButton" onClick={()=>onDecrement(BY)}>
                    -{BY}
                </button>
            </div>
        </div>
    );
}
