import "./App.css";

import React, { useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function Increase() {
    dispatch({ type: "INCREASE" });
  }

  function Decrease() {
    dispatch({ type: "DECREASE" });
  }

  return (
    <div className="App" style={{ fontSize: "40px" }}>
      Counter App
      <div className="App" style={{ fontSize: "40px", display:"flex", justifyContent: "space-around",  }}>
        <h1 onClick={Decrease}>-</h1>
        <h1>{state.count}</h1>
        <h1 onClick={Increase}>+</h1>
      </div>
    </div>
  );
}

export default App;
