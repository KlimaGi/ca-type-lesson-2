const isIt: boolean = false;
const muNumber: number = 4;
const someName: string = 'Harry';
// template strings
const greeting: string = `Hello, ${someName}`;

// arrays
const count: number[] = [1, 4, 5, 6];
const count1: Array<number> = [1, 4, 5, 6];

// returning nothing
function greeter(name: string) : void {
  console.log(`Hello, ${name}`);
}

greeter('Luigi');

// Enums
const joystickStatus = 1;
enum Directions{Up, Down, Left, Right}

// array
const names: string[] = ['luigi', 'mario', 'yoshi'];

names.push('lara');
// names.push(3);

interface Person {
  name: string;
  belt: string;
  age: number;
}

// objects
const ninja: Person[] = [
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

// ------------
type Student = {
  name: string,
  surname: string,
  course: number,
  avg: number
}
type fullname = string;

const students: Student[] = [{
  name: 'mario', surname: 'corid', course: 1, avg: 8.1,
}, {
  name: 'luigi', surname: 'mike', course: 2, avg: 7.2,
}, {
  name: 'lara', surname: 'yoshi', course: 3, avg: 8,
}, {
  name: 'ara', surname: 'oscar', course: 1, avg: 9,
}];

const fullNames: fullname[] = students.map(({ name, surname }) => `${name} ${surname}`);
console.log('full names', fullNames);

const StudentsFirstCourse: Student[] = students.filter(({ course }) => course === 1);
console.log('StudentsFirstCourse', StudentsFirstCourse);

const avg: number = students.reduce((acc, student) => acc + student.avg, 0) / students.length;
console.log('avg', avg);
