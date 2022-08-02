"use strict";
const isIt = false;
const muNumber = 4;
const someName = 'Harry';
const greeting = `Hello, ${someName}`;
const count = [1, 4, 5, 6];
const count1 = [1, 4, 5, 6];
function greeter(name) {
    console.log(`Hello, ${name}`);
}
greeter('Luigi');
const joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
const names = ['luigi', 'mario', 'yoshi', 'lara'];
names.push('lara');
const ninja = [
    {
        name: 'mario',
        belt: 'black',
        age: 30,
    }, {
        name: 'luigi',
        belt: 'orange',
        age: 32,
    },
];
const students = [{
        name: 'mario', surname: 'corid', course: 1, avg: 8.1,
    }, {
        name: 'luigi', surname: 'mike', course: 2, avg: 7.2,
    }, {
        name: 'lara', surname: 'yoshi', course: 3, avg: 8,
    }, {
        name: 'ara', surname: 'oscar', course: 1, avg: 9,
    }];
const fullNames = students.map(({ name, surname }) => `${name} ${surname}`);
console.log('full names', fullNames);
const StudentsFirstCourse = students.filter(({ course }) => course === 1);
console.log('StudentsFirstCourse', StudentsFirstCourse);
const avg = students.reduce((acc, student) => acc + student.avg, 0) / students.length;
console.log('avg', avg);
const numbers = [1, 2, 3, 5];
const printStrings = (strings) => {
    const printString = (str) => console.log(str);
    strings.forEach(printString);
};
const sumNumbers = (nums) => {
    const numberSumReducer = (sum, num) => sum + num;
    return nums.reduce(numberSumReducer, 0);
};
const createPeopleArray = (p1, p2) => [p1, p2];
console.group('printStrings');
printStrings(names);
console.groupEnd();
console.group('sumNumbers');
const result = sumNumbers(numbers);
console.log({
    numbers,
    result,
});
console.groupEnd();
console.group('CreatePeopleArray');
const couple = createPeopleArray(ninja[0], ninja[1]);
console.log('couple', couple);
console.group('1. types for functions and arrays');
const numbers = [1, -8, -6, 7, 5, 1];
function addPositiveNumbers(arr) {
    const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
    return arr.reduce(positiveNumberReducer, 0);
}
console.log({
    numbers,
    sumOfPositiveNumbers: addPositiveNumbers(numbers),
});
console.groupEnd();
const drinks = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
    { name: 'water', price: 4 },
];
const sortedByPrice = drinks.sort((a, b) => a.price - b.price);
console.log('sortedByPrice', sortedByPrice);
//# sourceMappingURL=main.js.map