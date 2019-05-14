var a = 5, b = 6;
if (a === b) {
    console.log(a);
} else if (a > b) {
    console.log(b);
} else if (a < b) {
    console.log(a+b);
}
var c = "Str", d = "Str2";
if (c === d) {
    console.log(c);
} else if (c > d) {
    console.log(d);
} else if (c < d) {
    console.log(c+d);
}
var e = true, f = false;
if (e === f) {
    console.log(e);
} else if (e > f) {
    console.log(f);
} else if (e < f) {
    console.log(e+f);
}
switch(a) {
    case 6: 
        console.log(6);
        break;
    case 5:
        console.log(5);
        break;
    default:
        console.log("value does not exist");
}
