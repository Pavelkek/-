// 1.Создать объект и добавить к нему свойство
var obj = {
    name : "Porshe",
    age : "2 years",
}
obj.color = "Red";

// 2. Изменить свойство объекта
obj.color = "Blue";

// 3. Сделать свойство объекта функцией сложения двух чисел
addition = function (a, b) {
    return a + b;
}
obj.color = addition;