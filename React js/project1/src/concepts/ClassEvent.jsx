import React, { Component } from "react";
class ClassEvent extends Component {
  HandleClick() {
    document.getElementById("i1").innerHTML = "Content changed";
  }
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <h1>Event handling in class Component</h1>
        <h2 id="i1">I change the content on click</h2>
        <button onClick={this.HandleClick}>Clcik Here</button>
      </div>
    );
  }
}
export default ClassEvent;
