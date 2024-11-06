import React, { Component } from "react";

export class ClassEvent5 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Balaji S ", age: 24, profession: "Student" };
    console.log(this);

    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick = () => {
    //binded lexically ; need to use bind()

    this.setState({
      name: "Virat kohli",
      age: 36,
      profession: "Cricketer and inspiring others",
    });
  };

  handleClick2() {
    alert("handle click 2");
  }

  render() {
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <h4>
          ---------Class event using arrow function need not to
          bind-------------
        </h4>
        <h1 style={{ color: "blue" }}>
          My name is {this.state.name} and I am {this.state.age} years old and I
          am a{this.state.profession}
        </h1>
        <button onClick={this.handleClick}>Change values</button>
      </div>
    );
  }
}
