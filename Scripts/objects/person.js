var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this._age = age;
            this._name = name;
        }
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.saysHello = function () {
            console.log(this.name + " says Hello!");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
(function () {
    function Start() {
        var student2 = new objects.Person(21, "ALI");
        student2.saysHello();
    }
    window.addEventListener("load", Start);
})();
// Make classes Abstract
// Learn using Interfaces
//# sourceMappingURL=person.js.map