var n = 0; 

function f() {
    for (item of arguments) {
        if (typeof item === 'number') {
            n = n + item;
        } else {
            throw new Error ('all parameters type should be a Number');
        }
    }
};


f(1,2,3); // 6
//f(1,1,1,1,1,1,1,1); // 8
//f(1,2,'s',4); // Error: all parameters type should be a Number

console.log (n);