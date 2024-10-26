// intersection in typescript
// export {};
// let myVar: number | string;
// myVar = 10; // number
// console.log("Variable storing a number: " + myVar);
// myVar = "Hello"; // string
// console.log("variable storing a string: " + myVar);

// union in typescript
export {};
let myVar: number | string;
myVar = 10; // number
console.log("variable storing a number: " + myVar);
myVar = "Hello"; // string
console.log("Variable storing a string :" + myVar);
//intersection in typescript
interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: number;
  salary: number;
}
type worker = Person & Employee;
let obj1: worker = {
  name: "Sachin",
  age: 40,
  employeeId: 123,
  salary: 1000,
};

for (let key in obj1) {
  console.log(obj1[key]);
}
