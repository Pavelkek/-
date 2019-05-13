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

//Задачи с сайта w3resource.com
//Задача 1
function reverse (x) {
    var begin = x;
    begin += '';
    var result = '';
    for (let i = begin.length - 1; i >= 0; i--) {
        result += begin[i]; 
    }
    return result;
}

//Задача 2
function checkPalindrome (str) {
    var strReverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i]; 
    }
    if (str === strReverse) {
        return "Its a polindrome";
    } else {
        return "Its not a polindrome";
    }
}

//Задача 3
function combinations (str) {
    var arr = [];
    var c = 0;
    var j;
    var result;
    for (let k = 0; k < str.length; k++) {
        j = c;
        for (let i = 0; i < str.length; i++) {
            var val = '';
            for (j; j <= i; j++) {
                val += str[j];
            }
            j = c;
            if (val !== '') {
                arr.push(val);
            }
    
        }
        c++;
    }
    result = arr.join(",");
    return result;
}

//Задача 4
function sort (str) {
    var result = str.split('');
    result = result.sort().join("");
    return result;
}

//Задание 5
function upperFirstLetter (str) {
    var result = str.split(' ');
    var result1 = [];
    var string;
    for(let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            if (j === 0) {
                string = result[i][0].toUpperCase(); 
            } else {
                string += result[i][j];
            }
        }
        result1.push(string);
    }
    string = result1.join();
    var resultString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ",") {
            resultString += string[i];
        } else {
           resultString += " ";
            }
        }
    return resultString;
}

//Задание 6
function longestWord (str) {
    var arrWords = str.split(' ');
    var maxLength = 0;
    var indexMaxLength = 0;
    for (let j = 0; j < arrWords.length; j++) {
        if (maxLength < arrWords[j].length) {
            maxLength = arrWords[j].length;
            indexMaxLength = j;
        } 
    }
    return arrWords[indexMaxLength];
}

//Задание 7
function vowelsCounter (str) {
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] === "a" ? counter++ : counter;
        str[i] === "e" ? counter++ : counter;
        str[i] === "u" ? counter++ : counter;
        str[i] === "i" ? counter++ : counter;
        str[i] === "o" ? counter++ : counter;
    }
    return counter;
}

//Задание 8  такое задание уже было, я просто скопировал код
function easyNumber (num) {
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
}

//Задание 9 такое задание уже было, я просто скопировал код
function typeOfArgument2 (arg) {
    console.log(typeof arg);
}


