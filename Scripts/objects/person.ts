module objects{
    export class Person {
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

(function(){

    function Start() {
        
        const student2: objects.Person = new objects.Person(21, "ALI");
        student2.saysHello();

    }

    window.addEventListener("load", Start);

})();
// Make classes Abstract
// Learn using Interfaces