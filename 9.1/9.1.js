//№1
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);
//№2
console.log(fruits[0]);
console.log(fruits[fruits > length - 1]);
fruits.push("Груша");
//№3
fruits.pop();
fruits.shift();
console.log(fruits);
//№4
fruits.forEach(fruit => {
    console.log(fruit);
});
//№5
let lengths = fruits.map(fruit => fruit.length);

//№6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);

//№7
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

//№8
let firstGreaterThanFive = numbers.find(num => num > 5);

//№9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = arr1.concat(arr2);

//№10
let hasBanana = fruits.includes("Банан");
console.log(hasBanana);

//№11
fruits.reverse();
