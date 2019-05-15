// Реализовать инкапсуляцию
var incapsulation = "hello";
(function() {
    var goodbay = "goodbay";
    function sayHello() {
        //обращение к переменной из другой области видимости
        console.log(incapsulation);
        console.log(goodbay);
    }
    sayHello();
}());