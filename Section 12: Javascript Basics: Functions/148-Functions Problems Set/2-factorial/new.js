// I could not figure out this soltuion. Below is what I was able get thus far.

// function factorial(x) {
//     while (x > 1) {
//         x * (x - 1);
//         var y = 0;
//         y + x;
//         x -1;
//     }
//     return y
// }

function factorial(x) {
    var result = 1;
    for(var i = 2; i <= x; i++) {
        result *= x;
    }
    return result;
}