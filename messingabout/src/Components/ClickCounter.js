import React, { useState } from "react";
const [count, setCount] = useState(0);

  function ClickCounters() {
    return (
      <div style={{textAlign: "center"}}>
        <p>Total: {count}</p>
        <button
          type="button"
          onClick={() => setCount((a) => a + 1)}
        >+</button>
        <button
        type="button"
        onClick={() => setCount((a) => a - 1)}>-</button>
        <button
          type="button"
          onClick={() => setCount((a) => a = 0)}>Reset</button>
            </div>
    )
  }