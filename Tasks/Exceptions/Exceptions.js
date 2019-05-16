// Завернуть в try catch 1/0 и вывести "на ноль делить нельзя"
function division (a, b) {
    try {
        a/b;
        if (b === 0) {
            throw new Error("На ноль делить нельзя");
        }
    } catch (err) {
        console.log(err.message);
    }
}
division(1, 0);