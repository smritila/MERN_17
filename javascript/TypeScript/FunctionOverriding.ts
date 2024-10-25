export {};
class Richie {
  House() {
    console.log("Richie builds a house of red color");
  }
}
class RC extends Richie {
  //Richies child
  House() {
    console.log("Richie's child paints it blue");
  }
  Flat() {
    console.log("Richie's child buys a flat");
  }
}
let rc: RC = new RC();
rc.House();

// function overriding
// a subclass  can provide a different implementation of a function
// that is already provided by its superclass
//- the subclass method has the same name, return type, and parameter
//list as the superclass

//- the subclass method can access the superclass method using the "super" keyword.

// function overloading- 1.having multiple functions with the same name but different types of parameter called as method over loading.
//2: Steps to method over loading
// define the over loaded functions.
//define the function implementation with the 3rd function which takes up any type of parameter and provides the implementation to the over loaded functions.

// key properties of OOP
// class - provides the properties of an object
// object- carries the properties given by the class
//Encapsulation- The attributes and functions are binded together.
// make attribute as private
// it restricts direct access
// provide public get() and set() to provide indirect access.
// polymorphism- one object shows multiple behaviours.
//ex- function overriding,  function overloading.
// abstraction- Provide only the functions but hide the implementation.
// An abstract class can not be  instantiated.(create object)
// an abstract function can not have function body.
