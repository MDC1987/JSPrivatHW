function f(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        console.log((a-b)/c);
    } else {
        throw new Error ('parameter type is not a Number');
    }
};

f(9,3,2); // 3
//f('s',9,3) // Error: all parameters type should be a Number