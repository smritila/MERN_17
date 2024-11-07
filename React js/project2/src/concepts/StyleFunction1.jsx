import React from "react";
import "../styles/style.css";
import homepage1 from "../images/homepage1.jpg";

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
      <div class="demo">
        <h1> I am styled using external css</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <img src={homepage1} alt="my pic here" />
        <img src="image/homepage1.jpg" alt="pic using public folder" />
      </div>
    </div>
  );
}

export default StyleFunction1;
