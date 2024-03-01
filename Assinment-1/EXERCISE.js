//Task-1. basic types
// number data type
var age = 20;
// string data type
var user_name = 'josh';
//boolean data type
var married = true;
//array
var salary = [10000, 20000, 30000];
//tuple
var uname = [1, 'josh'];
//enum
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 0] = "Sunday";
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
    DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
    DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
//Task-2.Functions
function add(num1, num2) {
    return num1 + num2;
}
function capitalize(str) {
    return str.toUpperCase();
}
// Function calling
console.log(add(10, 20));
console.log(capitalize('mosh'));
;
var user = {
    name: 'Saranya',
    age: 21,
    email: 'saranyanuparthi143@gmail.com'
};
//Task-4. classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.displayInfo = function () {
        console.log("".concat(this.make, " of model ").concat(this.model, " is manufactured in ").concat(this.year));
    };
    ;
    return Car;
}());
;
var carobject = new Car();
carobject.make = 'Audi';
carobject.model = 'A4 Sedan';
carobject.year = 1994;
carobject.displayInfo();
//task-5. Generics
function reverseArray(arr) {
    return arr.reverse();
}
;
console.log(reverseArray([3, 4, 2, 5, 6]));
