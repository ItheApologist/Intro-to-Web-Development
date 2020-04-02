var num = -10;

console.log("Test 1")
while (num <= 19) {
    console.log(num)
    num++
}

var num = 10;

console.log("Test 2");

while (num <= 40) {
    if (num % 2 === 0) {
        console.log(num)
    }
    num++
}

var num = 300;

console.log("Test 3");

while (num <= 333) {
    if (num % 2 !== 0) {
        console.log(num)
    }
    num++
}

var num = 5;

console.log("Test 4")

while (num <= 50) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num)
    }
    num++
}