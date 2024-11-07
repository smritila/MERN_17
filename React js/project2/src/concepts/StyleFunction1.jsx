import React from "react";

function StyleFunction1() {
  const mystyleObj = {
    color: "purple",
    backgroundColor: "pink",
  };
  return (
    <div>
      <h1>Styling in React JS</h1>
      <p>
        Styles can be applied in three ways: <br />
        1. Inline style using style attribute <br />
        2. External css file <br />
        3. CSS in javascript object
      </p>
      <h3 style={{ backgroundColor: "red", color: "white" }}>
        I am inline style
      </h3>
      <h3 style={mystyleObj}>I am js object style</h3>
    </div>
  );
}

export default StyleFunction1;
