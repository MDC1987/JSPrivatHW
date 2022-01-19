function f(n) {
    if (typeof n === 'number') {
        console.log(n**3);
    } else {
        throw new Error ('parameter type is not a Number');
    }
};


f(2);
//f('Content');