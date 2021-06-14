'use strict';

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let prime = 1;
let naturalNumber = [];

   while (prime <= 100) {
       if (prime == 1) {
           naturalNumber.push(1)
        } else {
            let result = 2;
            let i = 2;
            while (prime % i !== 0 ){
                i += 1;
                result +=1;
                } 
            if (result == prime) {
                naturalNumber.push(result);
            }
        }
        prime += 1;
    }
naturalNumber.shift();
console.log(naturalNumber);

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно
// реализовать функционал подсчета стоимости корзины в // зависимости // от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:

// a) Организовать такой массив для хранения товаров в корзине;

let newBasket = new Array(1, 2, 3, 4, 5);

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


function countBasketPrice(arr){
    return arr.reduce((item,nextItem)=> item+nextItem)
}

console.log(countBasketPrice(newBasket));


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for( let i = 0; i <= 9; console.log(i++));

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20
// рядов, а не 5:

let pyramid = "";

for( let x = 0; x < 20; x++) {
	pyramid = pyramid + "x";
	console.log(pyramid);
}