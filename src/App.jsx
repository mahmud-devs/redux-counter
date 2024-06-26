import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "./Features/Redux/Action/Action";
const App = () => {
    const dispatch = useDispatch();
    const Value = useSelector((state) => state.value);
    const handeIncrement = () => {
        dispatch(Increment());
    };
    const handleDecrement = () => {
        dispatch(Decrement());
    };
    const handleReset = () => {
        dispatch(Reset());
    };
    return (
        <>
            <div className="main">
                <div> Counter : {Value} </div>
                <div className="btnMain">
                    <button onClick={handeIncrement}>Increment</button>
                    <button onClick={handleDecrement}> Decrement</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default App;
