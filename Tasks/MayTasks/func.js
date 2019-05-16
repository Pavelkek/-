console.log( (() => 5 * 5)() );

nameId = name => {
    if (name === "Павел") {
        console.log("Привет " + name);
    } else {
        console.log("Не мое имя");
    }
}
nameId("Павел");

typeOfArgument = arg => typeof arg;
console.log(typeOfArgument(1));

reverse = x => {
    var begin = x;
    begin += '';
    var result = '';
    for (let i = begin.length - 1; i >= 0; i--) {
        result += begin[i]; 
    }
    return result;
}
console.log(reverse(152));

exponent = (b, n) => {
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
console.log(exponent(5,0));