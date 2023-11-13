import React, { useState } from "react";

  export function ClickCounters() {
    const [count, setCount] = useState(0);
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
    );
  };

  export function DataStore() {
    const [Fill, setFill] = useState(" ");
     return (
      <div style={{textAlign: "center"}}>
      <form>
        <label>Name: </label>
        <input type="text" value={Fill}/>
        </form>
        <button type="button" onClick={() => setFill((a) => a = "Noah Cleck")}>Noah</button>
        <button type="button" onClick={() => setFill((a) => a = "Katlynn Cleck")}>Katlynn</button>
        <button type="button" onClick={() => setFill(a => a = " ")}>Reset</button>
        </div>
 );
};