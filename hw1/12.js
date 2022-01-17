var arr = [1, 2, 3, -5, -2, 1, -4];

var i, n = 0;

for (i of arr) {
    if (i > 0) {
        n = n + i;
    }
}

console.log('Сумма положительных элементов массива:', n);