import React, { useState } from "react";

export default function Laskuri() {
  let [count, setCount] = useState(0);

  function plussaa() {
    count = count + 1;
    setCount(count);
  }
  function vähennä() {
    count = count - 1;
    setCount(count);
  }
  return (
    <div className="Laskuri">
      <div>{count}</div>
      <button onClick={plussaa}>+</button>
      <button onClick={vähennä}>-</button>
    </div>
  );
}
