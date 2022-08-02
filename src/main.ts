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
const names: string[] = ['luigi', 'mario', 'yoshi', 'lara'];

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
  avg: number,
  footsize?: number,
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

// --- ARRAYS ---
//  masyvai naudojami funkciju parametrams arba funkciju grazinimo tipams aprasyti
const numbers: number[] = [1, 2, 3, 5];
type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];

const printStrings = (strings: string[]): void => {
  const printString = (str: string): void => console.log(str);

  strings.forEach(printString);
};

const sumNumbers = (nums: Array<number>): number => {
  const numberSumReducer = (sum: number, num: number): number => sum + num;
  return nums.reduce(numberSumReducer, 0);
};

const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];

// printStrings(names);

console.group('printStrings');

printStrings(names);

console.groupEnd();

console.group('sumNumbers');

const result: number = sumNumbers(numbers);
console.log({
  numbers,
  result,
});

console.groupEnd();

console.group('CreatePeopleArray');
const couple: Array<Person> = createPeopleArray(ninja[0], ninja[1]);
console.log('couple', couple);

// array ---> task 1
console.group('1. types for functions and arrays');

const numbers: number[] = [1, -8, -6, 7, 5, 1];

function addPositiveNumbers(arr) {
  const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);

  return arr.reduce(positiveNumberReducer, 0);
}

console.log({
  numbers,
  sumOfPositiveNumbers: addPositiveNumbers(numbers),
});

console.groupEnd();

// task 1

type Drink = {
  name: string,
  price: number
}
const drinks: Drink[] = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'water', price: 4 },
];

const sortedByPrice: Drink[] = drinks.sort((a, b) => a.price - b.price);
console.log('sortedByPrice', sortedByPrice);

// task 2 -Burglary Series
// ...

// TS-2-typed-objects

// TS-2-typed-arrays
