var arr = [1, 2, 3, 4, 5, 6];

var n = arr.length - 1; //длина массива

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
    
        if (arr[j+1] > arr[j]) {
        let b = arr[j]; //буфферная переменная
        arr[j] = arr[j+1];
        arr[j+1] = b;
        }
    }
}

console.log('Массив по убыванию:', arr);