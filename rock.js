let rock = "rock";
let paper = "paper";
let scissors = "scissors";


let choices = [`${rock}`, `${paper}`, `${scissors}`]
let comp = choices[Math.floor(Math.random() * choices.length)];
console.log(comp)

let user = choices[Math.floor(Math.random() * choices.length)];
console.log(user)

if (user == rock && comp == scissors) {
    console.log("user wins");
} else if (user == paper && comp == rock) {
    console.log("user wins");
} else if (user == scissors && comp == paper) {
    console.log("user wins");
} else if (user == comp) {
    console.log("It's a draw");
} else {
    console.log("comp wins")
}