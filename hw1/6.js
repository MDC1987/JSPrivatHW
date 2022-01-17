var arr = [1, 2, 3, 4];

var i, n = 0;

for (i of arr) {
    n = n + i;
}

console.log('Сумма элементов массива:',n);