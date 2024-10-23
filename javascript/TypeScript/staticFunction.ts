//Typescript- It is the super set of js where we can  explicitly mention the data type of variables and return type of functions.

//syntax

//let var_name:datatype= value

// syntax functions:-
//function fun_name():return_type{

//body
//}

//return key word is used to return a value along with the controller from the called function to the callin function.
// static functions- these functions do not require object to be called . they can be called using class name.
// they are declared using static keyword.
// non static function- they require object to be called . they are declared without the static keyword.
export {};
class Employee {
  static CompanyName = "Ethnus";
  name: string;
  age: number;
  address: string;
  contact: number;
  email: string;

  constructor(name, age, address, contact, email) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.contact = contact;
    this.email = email;
  }
  display() {
    console.log(`Name:${this.name}, Age: ${this.age},
        Address: ${this.address}, contact: ${this.contact}
        Email: ${this.email}`);
  }
}

let emp1 = new Employee("Sachin", 24, "Mumbai", 123456789, "sachin@gmail.com");
emp1.display();
console.log("Company name: " + Employee.CompanyName);
