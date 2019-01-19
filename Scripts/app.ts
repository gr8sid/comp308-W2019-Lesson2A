module objects {
    export class Human {
        //PRIVATE INSTANCE VARIABLES
        private _age: number;
        private _name: string;

        get age(): number {
            return this._age
        }
        set age(newAge: number) {
            this._age = newAge;
        }


        get name(): string {
            return this._name;
        }
        set name(newName: string) {
            this._name = newName;
        }


        constructor(age: number, name: string) {
            this._age = age;
            this._name = name;
        }

        public saysHello() {
            console.log(`${this.name} says Hello!`);
        }
    }

}




// Make classes Abstract
// Learn using Interfaces
/*
const Human: objects.Human = new objects.Human(30, "Tom");
Human.saysHello();
*/

// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {

        let person: objects.Person;
        person = new objects.Person(25, "Sid");
        person.saysHello();
        let person2: objects.Person = new objects.Person(20, "SARAH");
        person2.saysHello();
        const person3: objects.Person = new objects.Person(21, "ALI");
        person3.saysHello();


        let student2: objects.Student = new objects.Student(20, "SARAH", "P099900");
        student2.saysHello();
        student2.studies();

        const student3: objects.Student = new objects.Student(21, "ALI", "P099901");
        student3.saysHello();
        student3.studies();

        let human: objects.Human = new objects.Human(20, "human");
        human.saysHello();

    }

    window.addEventListener("load", Start);

})();
