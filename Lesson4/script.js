'use strict';

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе
// объект, в котором в соответствующих свойствах описаны // единицы, десятки и сотни. Например, для числа 245 мы должны
// получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо // выдать
// соответствующее сообщение с помощью console.log и вернуть пустой объект.

const num = +prompt('Введите число от 0 до 999');

/**
 * функция принимает на вход число от 0 до 999 и разбирает
 * его на составляющие
 * @param {number} num
 * @returns объект чисел
 */
function getObjFromNumber(num){
    let obj = {};
    if(num > 999){
        return obj; // если число больше то возвращаем пустой объект
    }else{
        obj['единицы'] = num % 10;
        obj['десятки'] = parseInt(num / 10 % 10);
        obj['сотни'] = parseInt(num / 100);
        return obj;
    }
}
console.log(getObjFromNumber(num));


// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let myBascket = {
    bascket: [],

    putProductInShelf(item) {
        this.bascket.push(item)
    },

    getNumberOfProductds() {
        console.log(this.bascket.length)
    },

    getSumOfPrices() {
         let res = this.bascket.reduce((item, nextItem) =>
            item.price + nextItem.price)
        return res
    }
};

let product = {
    getName() {
        console.log(this.name)
    },

    getPrice() {
        console.log(this.price)
    },

    getCountryOfProduction() {
        console.log(this.produced)
    }
};

function productCreator(name, price, location) {
    let product1 = Object.create(product);
    product1.name = name
    product1.price = price
    product1.produced = location
    return product1
}

let banan = productCreator('banan', 130, 'Africa');
let orange = productCreator('orange', 150, 'Marocco');
let cola = productCreator('cola', 100, 'USA');

banan.getName();
orange.getName();
banan.getPrice();
orange.getPrice();
cola.getCountryOfProduction();
cola.getPrice();

myBascket.putProductInShelf(banan);
myBascket.putProductInShelf(cola);
myBascket.getNumberOfProductds();

// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для
// корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных
// модулей сайта, но в разных местах давал возможность вызывать разные методы.