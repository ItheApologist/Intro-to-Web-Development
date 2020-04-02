var age = prompt("What is your age?");

if (age == 21) {
    console.log("Happy 21st Birthday!")
} else if (age % Math.sqrt(age) == 0 ) {
    console.log("You are a perfect square!")
} else if (age % 2 != 0) {
    console.log("Your age is very odd!")
} else {
    console.log("Your age has no meaning. Sorry.")
}