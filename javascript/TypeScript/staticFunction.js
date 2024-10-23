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
var Employee = /** @class */ (function () {
    function Employee(name, age, address, contact, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.contact = contact;
        this.email = email;
    }
    Employee.prototype.display = function () {
        console.log("Name:".concat(this.name, ", Age: ").concat(this.age, ",\n        Address: ").concat(this.address, ", contact: ").concat(this.contact, "\n        Email: ").concat(this.email));
    };
    Employee.CompanyName = "Ethnus";
    return Employee;
}());
var emp1 = new Employee("Sachin", 24, "Mumbai", 123456789, "sachin@gmail.com");
emp1.display();
console.log("Company name: " + Employee.CompanyName);
