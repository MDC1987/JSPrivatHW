var arr = [];

function getDivisors(n) {
    //проверка положительных чисел
    if (typeof n === 'number' && n > 0 ) {
        for (var i = 1; i <= n; i++){
            if (n % i == 0) {
                arr.push(i);
            }
        }
    }
    // проверка отрицательных чисел
    else if (typeof n === 'number' && n < 0 ) {
        for (var i = -1; i >= n; i--){
            if (n % i == 0) {
                arr.push(i);
            }
        }
    }
    else if (n == 0) {
        throw new Error ('parameter can not be a 0');
    } else {
        throw new Error ('parameter type is not a Number');
    }
};

getDivisors(-12); // [1, 2, 3, 4, 6, 12]
//getDivisors('Content'); // Error: parameter type is not a Number
//getDivisors(0); // Error: parameter can't be a 0

console.log ('Массив делителей заданного числа:', arr);