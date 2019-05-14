// 1. Получить текущую дату, вывести в консоль
var now = new Date();
console.log(now);

// 2. Получить день, месяц и год текущей даты и по отдельности
var day = now.getDay();
console.log(day);
var month = now.getMonth();
console.log(month);
var year = now.getFullYear();
console.log(year);

// Задача 1
var date = new Date(2012,1,20,3,12);
console.log(date);

// Задача 2
function getWeekDay(date) {
    var carrentDate = date;
    var options = {
        weekday: "long",
    };
    switch( carrentDate.toLocaleString("ru", options) ) {
        case "понедельник":
            return "пн";
        case "вторник":
            return "вт";
        case "среда":
            return "ср";
        case "четверг":
            return "чт";
        case "пятница":
            return "пт";
        case "суббота":
            return "сб";
        case "воскресенье":
            return "вс";
        default:
            return "нет ткаого дня недели";
    }
}

// Задача 3
function getLocalDay(date) {
    var carrentDate = date;
    var options = {
        weekday: "long",
    };
    switch( carrentDate.toLocaleString("eu", options) ) {
        case "Mon":
            return "1";
        case "Tue":
            return "2";
        case "Wed":
            return "3";
        case "Thu":
            return "4";
        case "Fri":
            return "5";
        case "Sat":
            return "6";
        case "Sun":
            return "7";
        default:
            return "нет ткаого дня недели";
    }
}

// Задача 4 (не доделано)
function getDateAgo (date, days) {
    var newDate = new Date(date);
    newDate.setDate( newDate.getDay() - days );
    return newDate;
}
