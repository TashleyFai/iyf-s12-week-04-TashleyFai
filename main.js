// WEEK 4: JAVASCRIPT FUNDAMENTALS
// Lessons 7 and 8 Practice

// TASK 7.1: VARIABLES
const myName = "Faith";
let myAge = 23;
const isStudent = true;
const favoriteColors = ["Blue", "Black", "White"];
const today = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", today);

// TASK 7.2: OPERATORS
const numberOne = 20;
const numberTwo = 5;

console.log("Addition:", numberOne + numberTwo);
console.log("Subtraction:", numberOne - numberTwo);
console.log("Multiplication:", numberOne * numberTwo);
console.log("Division:", numberOne / numberTwo);
console.log("Remainder:", numberOne % numberTwo);
console.log("Power:", numberOne ** numberTwo);

let counter = 0;
counter++;
console.log("After increment:", counter);
counter--;
console.log("After decrement:", counter);

const firstName = "Faith";               
const greeting = `Hello, ${firstName}!`;
console.log(greeting);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(0));
console.log(firstName.includes("a"));

console.log("Is 10 equal to 10?", 10 === 10);
console.log("Is 10 greater than 5?", 10 > 5);
console.log("Logical AND:", true && false);
console.log("Logical OR:", true || false);
console.log("Logical NOT:", !true);

// TASK 7.3: FUNCTIONS

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function (a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name.charAt(0).toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function sayHello(name = "Friend") {
    return `Hello, ${name}!`;
}

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(greet("Faith"));
console.log("Addition function:", add(10, 5));
console.log("Multiplication function:", multiply(4, 3));
console.log("Division function:", divide(10, 2));
console.log("Area:", calculateArea(5, 4));
console.log("Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is even:", isEven(8));
console.log("Initials:", getInitials("Faith Kiptoo"));
console.log("Reversed:", reverseString("JavaScript"));
console.log(sayHello());
console.log("Tip:", calculateTip(1000));

// TASK 7.4: CONTROL FLOW

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day";
    }
}

console.log("Grade:", getGrade(85));
console.log("Day:", getDayName(3));

for (let i = 1; i <= 10; i++) {
    console.log("For loop:", i);
}

let count = 1;
while (count <= 5) {
    console.log("While loop:", count);
    count++;
}

const colors = ["Blue", "Black", "White"];
for (const color of colors) {
    console.log("Color:", color);
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// TASK 7.5: CALCULATOR

function calculatorAdd(a, b) {
    return a + b;
}

function calculatorSubtract(a, b) {
    return a - b;
}

function calculatorMultiply(a, b) {
    return a * b;
}

function calculatorDivide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return calculatorAdd(num1, num2);
        case "-": return calculatorSubtract(num1, num2);
        case "*": return calculatorMultiply(num1, num2);
        case "/": return calculatorDivide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

console.log("Calculator addition:", calculate(10, "+", 5));
console.log("Calculator subtraction:", calculate(10, "-", 5));
console.log("Calculator multiplication:", calculate(10, "*", 5));
console.log("Calculator division:", calculate(10, "/", 5));
console.log("Calculator remainder:", calculate(10, "%", 3));
console.log("Calculator power:", calculate(2, "**", 3));
console.log("Division by zero:", calculate(10, "/", 0));

// TASK 8.1: ARRAYS

const fruits = ["Mango", "Banana", "Orange"];
fruits.push("Apple");
fruits.unshift("Pineapple");
fruits.pop();
fruits.shift();

console.log("Fruits:", fruits);

fruits.forEach(fruit => console.log("Fruit:", fruit));

const numbers = [2, 5, 8, 12, 15, -3];

const doubledNumbers = numbers.map(number => number * 2);
const positiveNumbers = numbers.filter(number => number >= 0);
const firstLargeNumber = numbers.find(number => number > 10);
const productOfNumbers = numbers.reduce((total, number) => total * number, 1);

console.log("Doubled:", doubledNumbers);
console.log("Positive numbers:", positiveNumbers);
console.log("First number above 10:", firstLargeNumber);
console.log("Product:", productOfNumbers);
console.log("Includes 8:", numbers.includes(8));

// TASK 8.2: OBJECTS

const person = {
    name: "Faith",
    age: 23,
    isStudent: true,
    address: {
        city: "Nairobi",
        country: "Kenya"
    },
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log("Person:", person);
console.log("City:", person.address.city);
console.log(person.introduce());

person.favoriteFood = "Rice";
delete person.isStudent;

console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

for (const key in person) {
    console.log(key, person[key]);
}

// TASK 8.3: ARRAYS OF OBJECTS

const students = [
    { name: "Nia", grade: 95, major: "Computer Science" },
    { name: "Brian", grade: 78, major: "Business" },
    { name: "Zuri", grade: 54, major: "Computer Science" }
];

const studentNames = students.map(student => student.name);
const highGrades = students.filter(student => student.grade > 80);
const foundStudent = students.find(student => student.name === "Brian");
const averageGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
const computerScienceStudents = students.filter(student => student.major === "Computer Science");
const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
const hasExcellentStudent = students.some(student => student.grade > 90);
const allPassing = students.every(student => student.grade >= 60);

console.log("Student names:", studentNames);
console.log("Grades above 80:", highGrades);
console.log("Found student:", foundStudent);
console.log("Average grade:", averageGrade);
console.log("Computer Science students:", computerScienceStudents);
console.log("Sorted students:", sortedStudents);
console.log("Has grade above 90:", hasExcellentStudent);
console.log("All passing:", allPassing);

// TASK 8.4: JSON

const postsJSON = `[
    {"title":"Learning JavaScript","likes":20,"published":true},
    {"title":"My Coding Journey","likes":35,"published":false},
    {"title":"Web Development","likes":50,"published":true}
]`;

try {
    const posts = JSON.parse(postsJSON);
    const publishedPosts = posts.filter(post => post.published === true);
    const popularPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
    const postTitles = popularPosts.map(post => post.title);

    console.log("Published posts:", publishedPosts);
    console.log("Popular posts:", popularPosts);
    console.log("Post titles:", postTitles);
    console.log("JSON string:", JSON.stringify(publishedPosts));
} catch (error) {
    console.log("Invalid JSON:", error.message);
}

try {
    JSON.parse("This is not JSON");
} catch (error) {
    console.log("Caught invalid JSON:", error.message);
}

// EXTRA PRACTICE: AGE AND LOOPS

const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearTurning100 = today.getFullYear() + (100 - myAge);

console.log("Approximate age in days:", ageInDays);
console.log("Approximate age in hours:", ageInHours);
console.log("Year I will turn 100:", yearTurning100);

// Print numbers from 1 to 100
for (let number = 1; number <= 100; number++) {
    console.log(number);
}

// Print even numbers from 1 to 50
for (let number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
