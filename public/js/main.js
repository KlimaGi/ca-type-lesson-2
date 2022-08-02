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
const names = ['luigi', 'mario', 'yoshi'];
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
const drinks = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
    { name: 'water', price: 4 },
];
const sortedByPrice = drinks.sort((a, b) => a.price - b.price);
console.log('sortedByPrice', sortedByPrice);
//# sourceMappingURL=main.js.map