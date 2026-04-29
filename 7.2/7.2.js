let age = 15;
const name = "Alen";
age = 16;
// name="Alex"; будет ошибка
// var это старый способ объявления переменных. сейчас его редко используют потому что может вызывать ошибки

let num = 10;
let str = "Hello";
let bool = true;
let empty = null;
let notDefined;
let notNumber = NaN;
console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(empty, typeof empty);
console.log(notDefined, typeof notDefined);
console.log(notNumber, typeof notNumber);

let a="123";
let b=Number(a);
let c=456;
let d=String(c);
console.log(String(undefined));
console.log(Number(undefined));
console.log(String(null));
console.log(Number(null));

let value=100;
valude="Строка";
comsole.log(value);
// переменная может менят тип данных

let Name=promt("Введите ваше имя");
let Age=promt("введите ваш возраст");
console.log("имя", Name);
console.log("возраст", Age);