var i = 0;

function f (arr) {
    if (Array.isArray(arr)) {
        console.log (arr[i]);
        i++;
        if (i < arr.length) 
            f (arr);
    }    
    else if (arr.length == 0) {
    //    console.log (arr.length);
        throw new Error ('parameter can not be an empty');
    } else {
        throw new Error ('parameter type should be an array')
    }
}

f([1,2,3]);
// 1
// 2
// 3
//f(1,2,3) // Error: parameter type should be an array
//f('Content') // Error: parameter type should be an array
//f([]) // Error: parameter can't be an empty