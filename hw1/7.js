var arr = [1, 2, 3, 4];

var i, n = 0;

for (i of arr) {
    if (i % 2 == 0) {
        n = n + i;
    }
}

console.log('Сумма парных элементов массива:', n);