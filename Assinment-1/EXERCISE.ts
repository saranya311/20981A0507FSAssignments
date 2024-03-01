//Task-1. basic types

// number data type
let age: number = 20; 
// string data type
let user_name: string = 'josh';
//boolean data type
let married: boolean = true;
//array
let salary: number[] = [10000,20000,30000];
//tuple
let uname: [number, string] = [1, 'josh']
//enum
enum DaysOfTheWeek{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

//Task-2.Functions

function add(num1: number, num2: number): number{
    return num1+num2;
}
function capitalize(str: string): string{
    return str.toUpperCase()
}
// Function calling

console.log(add(10,20));
console.log(capitalize('mosh'));

//Task-3. Interfaces

interface Person{
    name: string,
    age: number,
    email: string
};
let user: Person = {
    name: 'Saranya',
    age: 21,
    email: 'saranyanuparthi143@gmail.com'
};

//Task-4. classes
class Car{
    make!: string;
    model!: string;
    year!: number;

    displayInfo(): void{
        console.log(`${this.make} of model ${this.model} is manufactured in ${this.year}`);
    };
};

let carobject = new Car();
carobject.make = 'Audi';
carobject.model = 'A4 Sedan';
carobject.year = 1994;
carobject.displayInfo();

//task-5. Generics
function reverseArray<T>(arr: Array<T>): Array<T>{
    return arr.reverse();
};
console.log(reverseArray([3,4,2,5,6]));