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
var Richie = /** @class */ (function () {
    function Richie() {
    }
    Richie.prototype.House = function () {
        console.log("Richie builds a house of red color");
    };
    return Richie;
}());
var RC = /** @class */ (function (_super) {
    __extends(RC, _super);
    function RC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Richies child
    RC.prototype.House = function () {
        console.log("Richie's child paints it blue");
    };
    RC.prototype.Flat = function () {
        console.log("Richie's child buys a flat");
    };
    return RC;
}(Richie));
var rc = new RC();
rc.House();
// function overriding
// a subclass  can provide a different implementation of a function
// that is already provided by its superclass
//- the subclass method has the same name, return type, and parameter
//list as the superclass
//- the subclass method can access the superclass method using the "super" keyword.
