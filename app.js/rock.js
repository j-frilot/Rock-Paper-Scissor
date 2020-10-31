let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let userRock = document.getElementById("btn-rock")
let userPaper = document.getElementById("btn-paper")
let userScissors = document.getElementById("btn-scissors")

userRock.addEventListener('click', playRockGame);



function playRockGame(){
    let user = rock
    console.log(user);
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];
    console.log(comp);
    
    if (user == rock && comp == scissors) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose scissors, You Won!!";
    } else if (user == paper && comp == rock) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose rock, You Won!!";
    } else if (user == scissors && comp == paper) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose paper, You Won!!";
    } else if (user == comp) {
        console.log("It's a draw");
        document.getElementById("result").innerHTML="Computer chose rock, It's a tie.";
    } else {
        console.log("comp wins")
        document.getElementById("result").innerHTML="Computer chose paper, You Lose";
    }
}


userPaper.addEventListener('click', playPaperGame);


function playPaperGame(){
    let user = paper
    console.log(user);
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];
    console.log(comp);

    if (user == rock && comp == scissors) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose scissors, You Won!!";
    } else if (user == paper && comp == rock) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose rock, You Won!!";
    } else if (user == scissors && comp == paper) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose paper, You Won!!";
    } else if (user == comp) {
        console.log("It's a draw");
        document.getElementById("result").innerHTML="Computer chose paper, It's a tie.";
    } else {
        console.log("comp wins")
        document.getElementById("result").innerHTML="Computer chose scissors, You Lose";
    }
}





userScissors.addEventListener('click', playScissorsGame);


function playScissorsGame(){
    let user = scissors
    console.log(user);
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];
    console.log(comp);

    

    if (user == rock && comp == scissors) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose scissors, You Won!!";
    } else if (user == paper && comp == rock) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose rock, You Won!!";
    } else if (user == scissors && comp == paper) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose paper, You Won!!";
    } else if (user == comp) {
        console.log("It's a draw");
        document.getElementById("result").innerHTML="Computer chose scissors, It's a tie.";
    } else {
        console.log("comp wins")
        document.getElementById("result").innerHTML="Computer chose rock, You Lose";
    }
}

