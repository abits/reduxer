import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { useDispatch, Provider } from "react-redux";

import "./styles.css";

function counter(state = 0, action: { type: any }) {
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

type DotProps = {
  color: string;
  count: number;
};

const IncrementerButton = () => {
  const dispatch = useDispatch();

  return (
    <button name="button" onClick={() => dispatch({ type: "INCREMENT" })}>
      Add +1
    </button>
  );
};

const DecrementButton = () => {
  const dispatch = useDispatch();

  return (
    <button name="button" onClick={() => dispatch({ type: "DECREMENT" })}>
      Sub -1
    </button>
  );
};

const RedDot = ({ color }: DotProps) => (
  <svg width="280" height="280">
    <g>
      <ellipse
        ry="20"
        rx="20"
        id="dot"
        cy="30"
        cx="30"
        strokeWidth="5"
        stroke="#000000"
        fill={color}
      />
      <text x="25" y="36" fill="#DDD">
        P
      </text>
    </g>
  </svg>
);

function App() {
  return (
    <div className="App">
      <h1>Reduxer Playground</h1>
      <h2>Managing state on so many different levels</h2>
      <RedDot color="#FF0000" />
      <RedDot color="#0000FF" />
      <DecrementButton />
      <IncrementerButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
