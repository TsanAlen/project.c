// Задание 1
function greet() {
    console.log("Привет, мир!");
}
greet();

// Задание 2
function sayHello(name) {
    console.log(Привет, {name});
}
sayHello("Амир");
sayHello("Алина");

// Задание 3
function sum(a, b) {
    return a + b;
}
let resultSum = sum(15, 25);
console.log(resultSum);

// Задание 4
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// Задание 5
function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Числа равны";
    }
}
console.log(max(10, 5));
console.log(max(7, 7));

// Задание 6
function getInitials(firstName, lastName) {
    return {firstName,[0]:toUpperCase()};{lastName[0].toUpperCase()};
}
console.log(getInitials("Алиса", "Боброва"));

// Задание 7
function square(num) {
    return num * num;
}
function cube(num) {
    return square(num) * num;
}
console.log(cube(5));

// Задание 8
const sumArrow = (a, b) => a + b;
console.log(sumArrow(12, 8));

// Дополнительное задание
function getFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(getFactorial(5));