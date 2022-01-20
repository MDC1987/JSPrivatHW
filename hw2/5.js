var arr1 = [1, 2, -4, 3, -9, -1, 7]; // первичный массив
var arr2 = []; // преобразованый массив из положительных чисел

// проверка чисел массива:
function isPositive(n) {
    if (typeof n === 'number') {
        if (n >= 0) {
            return true;
        } else {
            return false;
        }
    } else {
    throw new Error ('all parameters type should be a Number');
    }
};

//перебор элементов массива:
for (var i = 0; i <= arr1.length - 1; i++) {
	if (isPositive(arr1[i])) {
		arr2.push(arr1[i]);
    }
}

console.log ('Массив положительных чисел:', arr2);