import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const call = useDispatch();
  return (
    <div>
      <div className="number-text">{count}</div>
      <button className="btn" onClick={() => call(increment())}>
        increment
      </button>
      <button className="btn" onClick={() => call(decrement())}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
