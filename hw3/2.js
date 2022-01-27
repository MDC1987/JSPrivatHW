var arr2 = [];

var filter = function(arr, callback) {
    if (typeof Array.isArray(arr) && typeof callback === 'function') { //проверка
        for (var i = 0; i < arr.length; i++){
            if (callback (arr[i], i, arr)) {
                arr2.push(arr[i]);
            }
        }
    } else {
        throw new Error ('parameters are not correct');
    }
    return arr2;
}

const arr = [1,2,3];

var result = filter(arr, function(item, i, arr) {
    //console.log('значение:', item, 'индекс:', i, 'массив:', arr);    
    return item > 1;
});

console.log(result);