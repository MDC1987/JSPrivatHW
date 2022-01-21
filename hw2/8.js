var i = 0;

function f (arr) {
    // проверка на отсутствие элементов массива
    if (arr.length === 0) {
        throw new Error ('parameter can not be an empty');
    }
    // проверка на передачу массива чисел и вывода его элементов построчно
    else if (Array.isArray(arr)) {
        console.log (arr[i]);
        i++;
        if (i < arr.length) 
            f (arr);
    }    
    else {
        throw new Error ('parameter type should be an array');
    }
};

f([1,2,3]);
// 1
// 2
// 3
//f(1,2,3) // Error: parameter type should be an array
//f('Content') // Error: parameter type should be an array
//f([]) // Error: parameter can't be an empty