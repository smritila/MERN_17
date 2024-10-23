var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//acquiring the properties of super class to the sub class
// it is done using extends keyword
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bike;
}(Vehicle));
//create a Bike type variable and store the Bike object in it.
var bike1 = new Bike();
bike1.color = "red";
bike1.brand = "honda";
bike1.model = "CBR";
bike1.price = 10000000;
bike1.wheels = 2;
console.log(bike1.color);
console.log(bike1.brand);
console.log(bike1.model);
console.log(bike1.price);
console.log(bike1.wheels);
