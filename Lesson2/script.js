// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?

// ++i возвращает значение i после того, как оно было увеличено. i++ возвращает значение i до приращения.

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);

// x = 1 + (2 * 2) = 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт,
// который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = parseInt(prompt ('Введите число "А"'));
var b = parseInt(prompt ('Введите число "B"'));
var answer;
if (a >= 0 && b >= 0) {
    answer = a - b;
    alert ('Разность данных чисел равна: ' + answer);
} else if (a < 0 && b < 0) {
    answer = a * b;
    alert ('Произведение данных чисел равно: ' + answer);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    answer = a + b;
    alert ('Сумма данных чисел равна: ' + answer);
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от
// a до 15

var number = +prompt('Введите число от 0 до 15');
switch(number){
    case 0:
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
        break;
    default:
        console.log('Вы ввели либо не число, либо число, не включенное в интервал от 0 до 15');
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать
// оператор return.

var res;

function sum(x, y) {
    res = x + y;
    //console.log(res);
    alert('Сумма введеных чисел равна ' + res);
    return res;
}

function diff(x, y) {
    res = x - y;
    //console.log(res);
    alert('Разность введеных чисел равна ' + res);
    return res;
}

function comp(x, y) {
    res = x * y;
    //console.log(res);
    alert('Произведение введеных чисел равно ' + res);
    return res;
}

function div(x, y) {
    res = x / y;
    //console.log(res);
    alert('Частное от деления введеных чисел равно ' + res);
    return res;
}

var x = +prompt ('Введите число Х');
var y = +prompt ('Введите число Y');
sum(x,y);
diff(x,y);
comp(x,y);
div(x,y);

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения
// аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну
// из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(x,y,oper) {
    switch(oper) {
        case '+':
            sum(x,y);
            break;
        case '-':
            diff(x,y);
            break;
        case '*':
            comp(x,y);
            break;
        case '/':
            div(x,y);
            break;
        default:
            alert('Введен знак отличный от предложенных')
    }
}
x = +prompt('Введите число X');
var oper = prompt('Введите знак матемаческой операции (+, -, *, /)')
y = +prompt('Введите число Y');

mathOperation(x,y,oper);

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

// https://learn.javascript.ru/comparison#strannyy-rezultat-sravneniya-null-i-0

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где
// val – заданное число, pow – степень.

function power(val, pow){
    pow--;
    if(pow >= 1){
        val *= power(val, pow);
    }
    return val;
}
power(3, 8)
