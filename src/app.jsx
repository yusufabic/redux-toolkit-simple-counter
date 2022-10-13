import React from "react";
import { useDispatch } from "react-redux";
import { update, reset } from "./store/counter.slice";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="countbox">
      <div className="counter">
        <h1 className="count">{count}</h1>
        <button className="decrement" onClick={() => dispatch(update(-1))}>
          -
        </button>
        <button className="increment" onClick={() => dispatch(update(1))}>
          +
        </button>
        <button className="reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
