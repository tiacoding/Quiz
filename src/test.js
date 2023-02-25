let firstNumber = 10;
let secondNumber = 15;
let total;

total = firstNumber + secondNumber;

console.log(total);

let firstName = "Tahiyah";
let lastName = "Johura";
let age = 22;

let fullName = firstName + " " + lastName;

let sentence = "My name is " + fullName + " and I am " + age + " years old.";
console.log(sentence);
let humanyears = 4;
let dogyears = 7;

let ageindogyears = humanyears * dogyears;
//comment :)
console.log(ageindogyears);
//adding a single value to an array

let grades = [75, 80, 82, 100];
grades.push(99);
console.log(grades);
let FirstGrade = grades[0];
console.log("FirstGrade: " + FirstGrade);

let LastGrade = grades[4];
console.log("LastGrade: " + LastGrade);

grades[4] = 100;
console.log(grades);

grades.shift();
console.log(grades);

grades.pop();
console.log(grades);
