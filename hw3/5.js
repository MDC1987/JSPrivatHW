let reduce = function(arr, callback, acc) {
    var result = acc;
    if (typeof Array.isArray(arr) && typeof callback === 'function' && typeof acc === 'number'||'string') { //проверка
        for (var i = 0; i < arr.length; i++){
            result += callback (0, arr[i], i, arr);
            //console.log (result);
        }
        return result;
    } else {
        throw new Error ('parameters are not correct');
    }
    
}

const arr = [1,2,3];
const acc = 0;
var result = reduce(arr, function(acc, item, i, arr) {
    //console.log('значение:', item, 'индекс:', i, 'массив:', arr); 
    return acc + item;
}, acc);

console.log(result);