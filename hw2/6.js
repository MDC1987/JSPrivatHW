function isEven(n) {
    if (typeof n === 'number') {
        if (n % 2 == 0) {
            return console.log ('true');
        } else {
            return console.log ('false');
        }
    } else {
        throw new Error ('parameter type is not a Number');
    }
};

isEven(3); // false
//isEven(4); // true
//isEven('Content'); // Error: parameter type is not a Number