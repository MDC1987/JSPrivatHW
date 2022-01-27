function arrayFill(x,y){ 
    var arr = [];
    if (typeof Array.isArray(x) || typeof x === 'string'||'number'||'object') {
        if (typeof y === 'number') {
            for (var i = 0; i < y; i++){
                arr += x;
                //console.log(arr);
            }
        } else {
            throw new Error ('must be a number');
        }
    } else {
        throw new Error ('parameters are not correct');
    }
    return arr;
}

var result = arrayFill('x',5); // [x,x,x,x,x]

console.log(result);