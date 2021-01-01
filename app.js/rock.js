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
    let result = document.querySelector("#result")

    if (user == rock && comp == scissors) {
        result.innerHTML="Computer chose scissors, You Won!!";
        userCount++
    } else if (user == paper && comp == rock) {
        result.innerHTML="Computer chose rock, You Won!!";
        userCount++
    } else if (user == scissors && comp == paper) {
        result.innerHTML="Computer chose paper, You Won!!";
        userCount++
    } else if (user == comp) {
        result.innerHTML="Computer chose paper, It's a tie.";
    } else {
        result.innerHTML="Computer chose scissors, You Lose";
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
    condition(rock,comp)
}
// ////  PAPER
userPaper.addEventListener('click', playPaperGame);
function playPaperGame(){
    let user = paper
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];
    condition(paper,comp)
}
/////  SCISSORS
userScissors.addEventListener('click', playScissorsGame);
function playScissorsGame(){
    let user = scissors
    let choices = [`${rock}`, `${paper}`, `${scissors}`]
    let comp = choices[Math.floor(Math.random() * choices.length)];
    condition(scissors,comp)
}