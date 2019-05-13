//Задание 1 Функция сложения двух чисел
function addition (a, b) {
    return a + b;
}

//Задание 2 Функия определения имени(если имя ваше, то привет + имя)
function nameIdentifer (name) {
    if (name == "Павел") {
        console.log("Привет " + name);
    } else {
        console.log("Не мое имя");
    }
}

//Заданине 3 Функия вычисления типа аргумента и вывод в консоль
function typeOfArgument (arg) {
    console.log(typeof arg);
}

//Задание 4 Функия  выбора четных элементов массива(возвращает новый массив)
function evenArr (arr) {
    var evenArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

/*Задача 1
    Ответ: Нет. Потому что в любом случае,
    если age < 18 будет выполнен return confirm('Родители разрешили?')
*/

//Задача 2.1
function checkAge(age) {
    return age > 18 ?  true : confirm('Родители разрешили?');
}

//Задача 2.2
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}

//Задача 3
function min (a,b){
    return a > b ? b : a;
}

//Задача 4
function pow (a,b) {
    if (b != 0) {
        var result = a;
        for (let i = 1; i < b; i++) {
            result *= a 
        }
        return result;
    } else {
        return 1;
    }
}

