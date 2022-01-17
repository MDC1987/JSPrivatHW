var arr = [1, 2, 3, 4];

var i, n = 0;

for (i of arr) {
    if (i % 2 == 0 && i > 3) {
        n = n + i;
    }
}

console.log('Сумма четных элементов массива, больше 3:', n);