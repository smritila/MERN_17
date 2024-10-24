export {};
abstract class Game {
  abstract start();
  // abstract function do not have function body
  abstract stop();
  abstract left();
  abstract right();
}
// richies game must have start()stop() left() right()
class RichieGame extends Game {
  start() {
    console.log("Press up arrow to start");
  }
  stop() {
    console.log("Press down arrow to stop ");
  }
  left() {
    console.log("Press left arrow to go left");
  }
  right() {
    console.log("Press right arrow to go right");
  }
}
let g1: Game = new RichieGame();
g1.start();
g1.stop();
g1.left();
g1.right();

// Polymorphism - It is a phenomena where one objects behaves in multiple ways
//eg: A person is a student in a school, passenger in a bus, child to his parents and employee at a company
// Method overriding
//Method overloading
//Method Overriding-  Phenomenon where the parent and the child class have the same function but different implementation.
//The  function execution depends on the object created
//Abstraction
//A phenomenon where the functions are provided but the implementation is hidden.
//It is implemented using abstract keyword
//Abstract classes cannot be instantiated
//Abstract function cannot have a function body
// The child class has to override all the abstract functions of the parent abstract class.
