import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";

import "./styles.css";

function counter(state = 0, action) {
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

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
