// Завернуть в try catch 1/0 и вывести "на ноль делить нельзя"
function division (a, b) {
    try {
        a/b;
        if (b === 0) {
            throw new mathError();
        }
    } catch (err) {
        console.log("На ноль делить нельзя");
    }
}
division(1, 0);