let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let userRock = document.getElementById("btn-rock")
let userPaper = document.getElementById("btn-paper")
let userScissors = document.getElementById("btn-scissors")

let userCount = 0
let compCount = 0
let userScore = document.querySelector('#user-score')
let compScore = document.querySelector('#comp-score')

function condition(user, comp) {


    if (user == rock && comp == scissors) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose scissors, You Won!!";
        userCount++
    } else if (user == paper && comp == rock) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose rock, You Won!!";
        userCount++
    } else if (user == scissors && comp == paper) {
        console.log("user wins");
        document.getElementById("result").innerHTML="Computer chose paper, You Won!!";
        userCount++
    } else if (user == comp) {
        console.log("It's a draw");
        document.getElementById("result").innerHTML="Computer chose paper, It's a tie.";
    } else {
        console.log("comp wins")
        document.getElementById("result").innerHTML="Computer chose scissors, You Lose";
        compCount++
    }
   userScore.textContent = userCount
   compScore.textContent = compCount
    return
}

// ////  ROCK
userRock.addEventListener('click', playRockGame);
function playRockGame(){
    let user = rock
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(user);
    console.log(comp);
    
    condition(rock,comp)
}

// ////  PAPER
userPaper.addEventListener('click', playPaperGame);
function playPaperGame(){
    let user = paper
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];

    console.log(user);
    console.log(comp);

    condition(paper,comp)
}

/////  SCISSORS
userScissors.addEventListener('click', playScissorsGame);
function playScissorsGame(){
    let user = scissors
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];

    console.log(user);
    console.log(comp);

    condition(scissors,comp)
}


