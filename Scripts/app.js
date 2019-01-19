var objects;
(function (objects) {
    var Human = /** @class */ (function () {
        function Human(age, name) {
            this._age = age;
            this._name = name;
        }
        Object.defineProperty(Human.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Human.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Human.prototype.saysHello = function () {
            console.log(this.name + " says Hello!");
        };
        return Human;
    }());
    objects.Human = Human;
})(objects || (objects = {}));
// Make classes Abstract
// Learn using Interfaces
/*
const Human: objects.Human = new objects.Human(30, "Tom");
Human.saysHello();
*/
// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
        var person;
        person = new objects.Person(25, "Sid");
        person.saysHello();
        var person2 = new objects.Person(20, "SARAH");
        person2.saysHello();
        var person3 = new objects.Person(21, "ALI");
        person3.saysHello();
        var student2 = new objects.Student(20, "SARAH", "P099900");
        student2.saysHello();
        student2.studies();
        var student3 = new objects.Student(21, "ALI", "P099901");
        student3.saysHello();
        student3.studies();
        var human = new objects.Human(20, "human");
        human.saysHello();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map