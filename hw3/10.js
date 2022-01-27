function reverse(arr){ 
    var arr2 = [];
    if (typeof Array.isArray(arr)) {
        if (arr.length != 0) {
            for (var i = arr.length - 1; i >= 0; i--){
                arr2 += arr[i];
                //console.log(arr2);
            }
        } else {
            throw new Error ('massive is empty');
        }
    } else {
        throw new Error ('parameters are not correct');
    }
    return arr2;
}


const arr = [3,2,1];

var result = reverse(arr); // [1,2,3]

console.log(result);