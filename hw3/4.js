let some = function(arr, callback) {
    if (typeof Array.isArray(arr) && typeof callback === 'function') { //проверка
        for (var i = 0; i < arr.length; i++){
            if (callback (arr[i], i, arr)) {
                return true;
            }
        }
        return false;
    } else {
        throw new Error ('parameters are not correct');
    }
    
}

const arr = [1,2,3];

var result = some(arr, function(item, i, arr) {
    //console.log('значение:', item, 'индекс:', i, 'массив:', arr);    
    return item > 1;
});

console.log(result);