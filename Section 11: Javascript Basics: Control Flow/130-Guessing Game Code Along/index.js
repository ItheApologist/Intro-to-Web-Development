// do {
//     var age = Number(prompt("Guess a random number"));

//     if (age < 7) {
//         alert("Too Low.Try again.")
//     } else if (age > 7) {
//         alert("Too high. Try again.")
//     } else if (age === 7) {
//         break;
//     } else {
//         alert("This is not a number. Try again.")
//     }

// } while (age !== 7)

// alert("You did it! The correct number to guess was 7!")
// 
// 
// I kind of skipped ahead here while doing the course. 
// I'm writing the true code below.

var age = Number(prompt("Guess a random number."))

if (age < 7) {
    prompt("Too Low. Try again.")
} else if (age > 7) {
    prompt("Too high. Try again")
} else {
    prompt("You got it right!")
}