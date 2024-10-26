// it is beneficial because it provides a generalised container for the child objects.
export {};
class Fruits {
  //generalised class
  fruitName() {} //abstract function
  fruitcolor() {}
}
class Apple extends Fruits {
  fruitName(): void {
    console.log("Apple");
  }
  fruitcolor(): void {
    console.log("Red");
  }
  fruitOrigin(): void {
    console.log("USA");
  }
}
class Banana extends Fruits {
  fruitName(): void {
    console.log("Banana");
  }
  fruitcolor(): void {
    console.log("yellow");
  }
}
let bigBasket: Fruits = new Apple();
//or
//bigBasket = new Banana();
bigBasket.fruitName();
bigBasket.fruitcolor();
//bigBasket .fruitOrigin(); child member properties not
//accessible
//when objects is upcasted , cannot access child member
//downcast:  converting the upcasted
//variable to it's child object

let smallbasket = bigBasket as Apple;
//syntax: var_name = upcasted as child_class
smallbasket.fruitName();
smallbasket.fruitcolor();
smallbasket.fruitOrigin();


// union and intersection in typescript helps you create complex types from the existing ones adding flexibility for various scenarios.
// union type(|)-  It is like or operation.
// when a variable is assigned as union it can store more than one type of value.
// intersection(&)- it combines multiple types into one.It is like and operation.
//ex- person as well as employees. 