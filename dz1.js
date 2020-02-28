
//1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
  
let name = prompt ('Enter your name!');
alert ('Привет, '+ name);

//2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

//const year = 2020;
//let YoB = prompt ('Enter the year of birth!');
//age = year - YoB;  
//alert ('Your age is: ' + age);

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// let sidelen = prompt ('Enter side length of a square');
//perimetr = sidelen * 4;
//alert ('Square perimeter is: ' + perimetr);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

//let radius = prompt ('Enter radius!');
//area = Math.PI*radius**2;
//alert ('Area of a circle: ' + area.toFixed(4));

//5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

//let distance = prompt ('Enter distance!');
//let time = prompt ('Enter time!');
//speed = distance/time;
//alert ('You should drive with speed: ' + speed +' km/h');

//6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

//const rate = 0.91; 
//let usd = prompt ('Enter usd ammount!');
//euro = usd*rate;
//alert ('Your ammount is ' + euro +'euros');

//7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку

//const filemb = 820;
//let volume = prompt ('Enter volume in Gb!');
//quantity = volume * 1024/filemb;
//alert ('You can write ' + Math.floor(quantity) +' files');

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

//let ammount = prompt ('Enter your ammount!');
//let price = prompt ('Enter chocolate price!');
//quantity = Math.floor (ammount / price); 
//change = ammount % price;
//alert ('You can buy: ' + quantity + ' pcs \n\r' + 'Your change is: ' + change);

//9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

//let number = prompt ('Enter 3 digits number!');
//firstdig = number % 10;
//number = (number - firstdig)/10;
//secdig = number % 10;
//thirddig = (number - secdig)/10;
//alert ('Backwards: ' + firstdig + secdig + thirddig);

