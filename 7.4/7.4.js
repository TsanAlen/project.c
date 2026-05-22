//№1
let number = promt("Введите число")
if (number > 10) {
    console.log("Число больше 10")
} else {
    console.log("Число меньше или равно 10")
}
//№2
let isDelete = confrim("Вы хотите удалить файл?")
if (isDelete) {
    console.log("Файл удален")
} else {
    console.log("Удаление отмененно")
}
//№3
let age = promt("Введите ваш возраст")
if (age < 18) {
    console.log("Вы еще подросток")
} else if (age >= 18 && age <= 30) {
    console.log("Вы молодой но взрослый")
} else {
    console.log("Вы взрослый")
}
//№4
let numCheck = promt("Введите число для проверки на четность")
let message = (nuumCheck % 2 == 0) ? "четное число" : "нечентное число"
console.log(message)
//№5
let day = promt("Введите день недели(число от 1 до 7)")
switch (day) {
    case "1": console.log("Понедельник"); break
    case "2": console.log("Вторник"); break
    case "3": console.log("Среда"); break
    case "4": console.log("Четверг"); break
    case "5": console.log("Пятница"); break
    case "6": console.log("Суббота"); break
    case "7": console.log("Воскресенье"); break
}
//№6
let a = +promt("Введите первое число")
let b = +promt("Введите второй число")
if (a === b) {
    console.log("Чсла рaвны")
} else {
    console.log(a > b ? "Первое число больше" : "Второе число больше")
}
//№ доп задание
let month=promt("Введите номер месяца")
switch(month){
case "12":
case"1":
case"2":
    console.log("Зима")
    break
case"3":
case"4":
case"5":
    console.log("Весна")
    break
case"6":
case"7":
case"8":
    console.log("Лето")
    break
case"9":
case"10":
case"11":
    console.log("Осень")
}