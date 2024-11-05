import React, { useState } from "react";
function Counter() {
  // State to store the counts
  const [count, setCount] = useState(0);
  const [increaseClicks, setIncreaseClicks] = useState(0);
  const [decreaseClicks, setDecreaseClicks] = useState(0);
  //Handler for the increase button
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
    setIncreaseClicks((prevClicks) => prevClicks + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
    setDecreaseClicks((prevClicks) => prevClicks + 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count:{count}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <p>Increase clicked:{increaseClicks} times</p>
      </div>
      <div>
        <button onClick={handleDecrease}>Decrease</button>
        <p>Decrease Clicked :{decreaseClicks}times</p>
      </div>
    </div>
  );
}
export default Counter;
