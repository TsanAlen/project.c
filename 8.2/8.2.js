//№1
const person={name:'Ален', age: 15, city: 'Алматы'};
console.log(person);
//№2
console.log('Имя: {person.name}, Возраст: {person.age}');
person.city='Астана';
//№3
person.greet=function(){
   console.log('Привет, меня зовут {this.name}, мне {this.age} лет')
};
person.greet();
//№4
const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log("Объекты сравниваются по ссылке, а не по значению. Они ссылаются на разные адреса в памяти, поэтому результат false.");

//№5
const book = {
  title: 'Изучаем JavaScript',
  author: 'Эрик Фримен',
  details: {
    year: 2020,
    pages: 450
  }
};

const bookCopy = Object.assign({}, book);
bookCopy.details.year = 2024;

console.log(book.details.year);
console.log("Object.assign копирует объект поверхностно. Вложенный объект details скопировался по ссылке, поэтому изменения отразились и на оригинале.");

//№6
const calculator = {
  a: 5,
  b: 3,
  sum() {
    return this.a + this.b;
  },
  multiply() {
    return this.a * this.b;
  }
};

console.log(calculator.sum());
console.log(calculator.multiply());

//№7
const car = {
  brand: 'Toyota',
  model: 'Camry'
};

car.model = 'RAV4';
console.log("const запрещает менять саму ссылку в переменной car, но менять свойства внутри объекта разрешено.");