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

// Задание 10
function identityMatr (n) {
    var matr = [];
    for (let i = 0; i < n; i++) {
        matr.push([]);
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matr[i][j] = 1;
            } else {
                matr[i][j] = 0;
            }
        }
    }
    return matr;
}

//Задание 11 (не знаю на сколько корректно такое решение)
function secondValue (arr) {
    return [arr[1], arr.length-1];
}

//Задание 12
function perfect (num) {
    var sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum/2 === num) {
        return "This number is perfect";
    } else {
        return "This number is not perfect";
    }
}

//Задание 13
function factors (num) {
    var arrFactors = [];
    var variable = num;
    while (variable !== 1) {
        for (let i = 2; i < 20; i++) {
            if (variable % i === 0) {
                for (let j = 2; j < i; j++) {
                    if (i % j !== 0) {
                        continue;
                    } else {
                        break;
                    }
                }
                variable /= i;
                arrFactors.push(i);
                break;
            }
        }
    }
    return arrFactors;
} 
//factors(525);

// Задание 14
function amountToCoins (sum,coins) {
    var resoultArrCoins = [];
    var resoult = 0;
    for (let i = 0; i < coins.length; i++) {
        while (resoult <= sum - coins[i]) {
            resoult += coins[i];
            resoultArrCoins.push(coins[i]);
        }
    }
    return resoultArrCoins;
}

// Задание 15
function exponent (b, n) {
    var resoult = b;
    var exp = n;
    if (exp !== 0){
        for (let i = 1; i < exp; i++) {
            resoult *= b;
        }
    } else {
        resoult = 1;
    }
    return resoult;
}

// Задание 16
function unique (str) {
    var resoult = '';
    for (let i = 0; i < str.length; i++) {
        if (resoult.indexOf(str[i]) === -1) {
            resoult += str[i];
        }
    }
    return resoult;
}

// Задание 17
function letterCounter (str) {
    var matr = [[],[]];
    for (let i = 0; i < str.length; i++) {
        if (matr[0].indexOf(str[i]) === -1) {
            matr[0].push(str[i]);
            matr[1].push(1);
        } else {
            matr[1][matr[0].indexOf(str[i])]++;
        }
    }
    return matr;
}

// Задание 18
function binariSearch (arr, num) {
    var middle = arr.length/2;
    var left = -1;
    var right = arr.length;
    while (left < right - 1) {
        middle = (left + right)/2;
        if (arr[middle] < num) {
            left = middle;
        } else {
            right = middle;
        }
    }
    return right;    
}

// Задание 19
function largerElemens (arr, num) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
} 

// Задание 20
function stringLength () {
    var str = '';
    var lengthString = Math.round((Math.random() * 9) + 1);
    for (let i = 0; i < lengthString; i++) {
        str += "B";
    }
    return str;
}

// Задание 21
function fixedLengthArr (arr, num) {
    var resultArr = [];
    for (let i = 0; i < arr.length-1; i++) {
        resultArr.push([]);
        resultArr[i].push(arr[i]);
        resultArr[i].push(arr[i+1])
    }
    resultArr.push([]);
    resultArr[resultArr.length - 1].push(arr[0]);
    resultArr[resultArr.length - 1].push(arr[arr.length-1]);
    return resultArr;
}
// Задание 22
function counterLetter (str, letter) {
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter++;
        }
    }
    return counter;
}

// Задание 23
function firstNotRepeated (str) {
    var resoult = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if ((str[i] !== str[j] || i === j)) {
                if (j === str.length-1) {
                    resoult = str[i];
                }
                continue;
            } else { 
                break;
            }
        }
        if (resoult !== '') {
            break;
        }
    }
    return resoult;
}

// Задание 24
function bubbleSort (arr) {
    var resoultArr = arr;
    for (let i = 0; i < resoultArr.length; i++) {
        for (let j = 0; j < resoultArr.length; j ++) {
            if (resoultArr[j] < resoultArr[j+1]) {
                var val = resoultArr[j];
                resoultArr[j] = resoultArr[j+1];
                resoultArr[j+1] = val;
            }
        }
    }
    return resoultArr;
}

// Задание 25
function longestCountryName (arr) {
    var maxLength = 0;
    var maxLengthIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            maxLengthIndex = i;
        }
    }
    return arr[maxLengthIndex];
}

// Задание 26
function longestWithoutRepeating (str) {
    var arr = str.split(" ");
    var stop = 0;
    var resoultArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== arr[i][j+1]) {
                continue;
            } else {
                stop = 1;
                break;
            }
        }
        if (stop === 1) {
            stop = 0;
            continue;
        }
        resoultArr.push(arr[i]);
    }
    var maxLength = 0;
    var maxLengthIndex = 0;
    for (let i = 0; i < resoultArr.length; i++) {
        if (resoultArr[i].length > maxLength) {
            maxLength = resoultArr[i].length;
            maxLengthIndex = i;
        }
    }
    return resoultArr[maxLengthIndex];
}

// Задание 27
function longestPalindrome (str) {
    var strReverse = '';
    var arr = str.split(" ");
    var palindromeArr = [];
    for (let j = 0; j < arr.length; j++) {
        for (let i = arr[j].length - 1; i >= 0; i--) {
            strReverse += arr[j][i]; 
        }
        console.log(strReverse);
        if (arr[j] === strReverse) {
            palindromeArr.push(arr[j]);
        } else {
            strReverse = '';
            continue;
        }
        strReverse = '';
    }
    var maxLength = 0;
    var maxLengthIndex = 0;
    for (let i = 0; i < palindromeArr.length; i++) {
        if (palindromeArr[i].length > maxLength) {
            maxLength = palindromeArr[i].length;
            maxLengthIndex = i;
        }
    }
    return palindromeArr[maxLengthIndex];
}

// Задание 28 (немного не понял суть задания. передавал функцию addition все работает,
//              но мне кажется, задание было не в этом)
function passFunction (func) {
    var a = func;
    a(4,5);
}

// Задание 29
function self () {
    return self.name;
}