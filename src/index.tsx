import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";

import "./styles.css";

function counter(state = 0, action: { type: any; }) {
  switch (action.type) {
    case "INCREMENT":
      state = state + 1;
      return state;
    case "DECREMENT":
      state = state - 1;
      return state;
    default:
      return state;
  }
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT " });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });


type DotProps = {
  color: "#FF0000"
}

const RedDot = () => 
  <svg width="640" height="480">
  <g>
    <ellipse ry="25" rx="25" id="svg_2" cy="132" cx="136" stroke-width="5" stroke="#000000" fill={ `DotProps.color` }/>
  </g>
</svg> 


function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some happen!</h2>
        <RedDot></RedDot>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
