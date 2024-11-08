import React from "react";
import ChildComp2 from "./ChildComp2";

function ParentComp2() {
  let showMessage = (childData) => {
    alert("data from child: " + childData);
  };
  return (
    <div>
      <h2>I am Parent, will display data from child</h2>
      <ChildComp2 handleClick={showMessage} />
    </div>
  );
}

export default ParentComp2;
