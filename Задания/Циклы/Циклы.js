var a = 15;
for (let i = 0, b = a - 10; i < b; i++) {
    console.log(--a);
}

/*Задача1
    Ответ: 1, потому что на последнем шаге цикла i становится равным 0
    который преобразуется в false и в цикле перестает выполняться условие
*/

/*Задача2
    Ответ: Префиксный вариант - 1234
           Постфиксный вариант - 12345
*/

/*Задача3
    Ответ: Префиксный вариант - 01234
           Постфиксный вариант - 01234
*/

//Задача4
for (let i = 2; i <=10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Задача 5
var i = 0;
while (i < 3) {
    alert("номер" + i + "!");    
    i++;
}

//Задача 6
var value = 0;
value = +prompt("Введите число больше 100");
while (value <= 100 || isNaN(value)) {
    value = +prompt("Вы ввели не подходящее число. Попробуйте еще раз")
}

//Задача 7
var c = true;
for (let i = 2; i <= 10; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            c = false;
            break;
        }
    }
    if (c) {
        console.log(i);
    }
    c = true;
}

