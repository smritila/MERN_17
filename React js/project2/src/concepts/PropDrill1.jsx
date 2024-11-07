import React from "react";

function PropDrill1(props) {
  console.log(props);
  return (
    <div>
      <h1> I am prop Drill 1 comp, displaying data from app</h1>
      <p>My name is {props.student.name}</p>
      <p>My age is {props.student.age}</p>
    </div>
  );
}

export default PropDrill1;
