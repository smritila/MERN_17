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
