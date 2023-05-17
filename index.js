const heading = document.querySelector(".heading");

const chooseRock = document.querySelector(".rock");
const choosePaper = document.querySelector(".paper");
const chooseScissors = document.querySelector(".scissors");

const compRock = document.querySelector(".compRock");
const compPaper = document.querySelector(".compPaper");
const compScissors = document.querySelector(".compScissors");

const rockIcon = document.querySelector(".rockIcon");
const paperIcon = document.querySelector(".paperIcon");
const scissorsIcon = document.querySelector(".scissorsIcon");

const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const restart = document.querySelector(".again");

let compChoice;
let humanChoice;

const randomChoice = () => {

    if (compChoice == 1) {
        compRock.classList.remove("hide");
    } 
    else if (compChoice == 2) {
        compPaper.classList.remove("hide");
    } 
    else if (compChoice == 3) {
        compScissors.classList.remove("hide");
    } 
    else {
        compRock.classList.add("hide");
        compPaper.classList.add("hide");
        compScissors.classList.add("hide");
    }
}

const Rock = () => {
    rockIcon.classList.remove("hide");
    choices.classList.add("hide");
    heading.classList.add("hide");
    humanChoice = 1;
    compChoice = Math.ceil(Math.random() * 3);
    restart.classList.remove("hide");
    randomChoice();
    seeResult();
}

const Paper = () => {
    paperIcon.classList.remove("hide");
    choices.classList.add("hide");
    heading.classList.add("hide");
    humanChoice = 2;
    compChoice = Math.ceil(Math.random() * 3);
    restart.classList.remove("hide");
    randomChoice();
    seeResult();
}

const Scissors = () => {
    scissorsIcon.classList.remove("hide");
    choices.classList.add("hide");
    heading.classList.add("hide");
    humanChoice = 3;
    compChoice = Math.ceil(Math.random() * 3);
    restart.classList.remove("hide");
    randomChoice();
    seeResult();
}

const seeResult = () => {
    if (humanChoice == 1 && compChoice == 3 || humanChoice == 2 && compChoice == 1 || humanChoice == 3 && compChoice == 2) {
        result.innerText = "You won!"
    }
    else if (humanChoice == compChoice) {
        result.innerText = "game draw"
    }
    else {
        result.innerText = "You lost"
    }
}

const playAgain = () => {
    choices.classList.remove("hide");
    heading.classList.remove("hide");
    rockIcon.classList.add("hide");
    paperIcon.classList.add("hide");
    scissorsIcon.classList.add("hide");
    result.innerText = ""
    compChoice = 0;
    randomChoice();
    restart.classList.add("hide");
}

chooseRock.addEventListener('click', () => Rock());
choosePaper.addEventListener('click', () => Paper());
chooseScissors.addEventListener('click', () => Scissors());
restart.addEventListener('click', () => playAgain());
