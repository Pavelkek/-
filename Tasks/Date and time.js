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
    var currentDate = date;
    var options = {
        weekday: "short",
    };
    return currentDate.toLocaleString("ru", options);
}

// Задача 3
function getLocalDay(date) {
    var currentDate = date;
    return currentDate.getDay();
}

// Задача 4
function getDateAgo(date, days) {
    var newDate = new Date(date);
    newDate.setDate( newDate.getDate() - days );
    return newDate.getDate();
}

// Задача 5
function getLastDayOfMonth(year, month) {
    var date = new Date (year, month + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

// Задача 6
function getSecondsToday() {
    var date = new Date();
    var currentDate = new Date();
    date.setHours(0, 0, 0, 0);
    return  Math.round( (+currentDate - +date) / 1000 );
}

// Задача 7
function getSecondsToTommorrow() {
    var tommorrowDate = new Date();
    var currentDate = new Date();
    tommorrowDate.setDate( tommorrowDate.getDate() + 1 );
    tommorrowDate.setHours(0, 0, 0, 0);
    return  Math.round( (+tommorrowDate - +currentDate) / 1000 );
}

// Задача 8
function formatDate(date) {
    var currentDate = date;
    var options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
    }
    return currentDate.toLocaleString("ru", options);
}

// Задача 9
function formatDateTwo(date) {
    var currentDate = new Date();
    var options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }
    if (+currentDate - +date < 1 * 1000) {
        return "толко что";
    } else if (+currentDate - +date < 59 * 1000) {
        return (+currentDate - +date) / 1000 + " сек. назад";
    } else if (+currentDate - +date < 59 * 1000 * 60) {
        return (+currentDate - +date) / 1000 / 60 + " мин. назад";
    } else {
        return date.toLocaleString("ru", options);
    }
}