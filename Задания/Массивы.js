// 1. Перебор массива с выводом в консоль каждого элемента
var arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(i);
    console.log(arr[i]);
}

// 2. Преобразовать массив в строку и обратно в массив
var strFromArr = "";
strFromArr += arr.join(" ");
console.log(strFromArr);
var arrNew = strFromArr.split(' ');
for(let i = 0; i < arrNew.length; i++) {
    console.log(arrNew[i]);
}

// 3. Добавить к каждому элементу массива слово hello
for(let i = 0; i < arrNew.length; i++) {
    arrNew[i] = arrNew[i] + "hello";
    console.log(arrNew[i]);
}

// 4. Преобразовать числовой массив в bollean 
for(let i = 0; i < arr.length; i++) {
    arr[i] = !!arr[i];
    console.log(arr[i]);
}