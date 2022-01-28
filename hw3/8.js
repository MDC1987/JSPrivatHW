function f(arr) {

    var result = [];
    if (Array.isArray(arr)) {
        // Создание одномерного массива из многомерного
        for (let item of arr) {
            if (typeof item === 'object') {
                result = result.concat(f(item));
            } else {
                if (typeof item === 'number') {
                    result.push(item);  
                } else {
                    throw new Error ('items must be numbers');
                }
            }
        }
    } else {
        throw new Error ('that is not array');
    }
    
    //Суммирование элементов массива
    var res = result.reduce(function(sum,current) {
        return sum + current;
    }, 0);

    return res;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log('Сумма элементов 1-го массива:', f(arr)); // 12

const arr2 = [[[[[1, 2]]]]];
console.log('Сумма элементов 2-го массива:',f(arr2)); // 3

const arr3 = [[[[[1,2]]],2],1];
console.log('Сумма элементов 3-го массива:',f(arr3)); // 6

const arr4 = [[[[[]]]]];
console.log('Сумма элементов 4-го массива:',f(arr4)); // 0

const arr5 = [[[[[],3]]]];
console.log('Сумма элементов 5-го массива:',f(arr5)); // 3