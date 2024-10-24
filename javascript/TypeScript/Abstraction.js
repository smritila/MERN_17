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
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());
// richies game must have start()stop() left() right()
var RichieGame = /** @class */ (function (_super) {
    __extends(RichieGame, _super);
    function RichieGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RichieGame.prototype.start = function () {
        console.log("Press up arrow to start");
    };
    RichieGame.prototype.stop = function () {
        console.log("Press down arrow to stop ");
    };
    RichieGame.prototype.left = function () {
        console.log("Press left arrow to go left");
    };
    RichieGame.prototype.right = function () {
        console.log("Press right arrow to go right");
    };
    return RichieGame;
}(Game));
var g1 = new RichieGame();
g1.start();
g1.stop();
g1.left();
g1.right();
// Polymorphism - It is a phenomena where one objects behaves in multiple examples
