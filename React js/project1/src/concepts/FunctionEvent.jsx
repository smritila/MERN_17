import React from "react";

function FunctionEvent() {
  function changeName() {
    let nameElement = document.getElementById("id1");
    nameElement.innerHTML = "Sachin Ramesh Tendulkar";
  }

  return (
    <div style={{ backgroundColor: "magenta" }}>
      <h4>--------Functional Event (05-11-2024)----------</h4>
      <h1 style={{ color: "green" }}>
        Hello my name is <span id="id1"> Virat kohli </span>
      </h1>
      <button onClick={changeName}>Change Name </button>
    </div>
  );
}

export default FunctionEvent;
