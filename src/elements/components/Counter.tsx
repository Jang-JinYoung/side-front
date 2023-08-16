import React from "react";
import { useStore } from "zustand";
import useCounterStore from "@store/count";

function Counter() {
  const { count, increment, decrement } = useStore(useCounterStore);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
