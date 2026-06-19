//№1
const person={name:'Ален', age: 15, city: 'Алматы'};
console.log(person);
console.log('Имя: {person.name}, Возраст: {person.age}');
person.city='Астана';
person.greet=function(){
   console.log('Привет, меня зовут {this.name}, мне {this.age} лет')
};