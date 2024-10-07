const choices = ["rock", "paper", "scissors"];
const imgMap = {"rock": "images/rpsRock.jpeg",
    "paper": "images/rpsPaper.jpeg",
    "scissors": "images/rpsScissor.jpeg",
    "default": "images/rpsDefault.jpeg",
    "youWin": "images/rpsWin.png",
    "youLose": "images/rpsLose.png",
    "youDraw": "images/rpsDraw.png"
}
let rounds = 5;
let humanScore = 0;
let computerScore = 0;
let Draw = 0;

// sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)];
}

async function playRound (humanChoice, computerChoice) {
    const imgHuman = document.querySelector('.container .players .human .default');
    const imgComp = document.querySelector('.container .players .computer .default');
    console.log(humanChoice);
    console.log(computerChoice);
    imgHuman.setAttribute('src', imgMap[humanChoice]);
    imgComp.setAttribute('src', imgMap[computerChoice]);
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
    } else {
        // Handle drawing
        Draw += 1;
    }
    rounds--;
    updateScore(humanScore, computerScore);

    if (rounds === 0) {
        gameOver(humanScore, computerScore);
    } else {
        await sleep(900);
        imgHuman.setAttribute('src', imgMap['default']);
        imgComp.setAttribute('src', imgMap['default']);
    }

    // if rounds are over do end the game displaying the results
}

function updateScore(humanScore, computerScore) {
    const hs = document.querySelector('.container .scoreStatus .humanScore .hScore');
    const cs = document.querySelector('.container .scoreStatus .computerScore .cScore');
    hs.innerText = humanScore;
    cs.innerText = computerScore
}

function gameOver(humanScore, computerScore) {
    const imgHuman = document.querySelector('.container .players .human .default');
    const imgComp = document.querySelector('.container .players .computer .default');
    if (humanScore > computerScore) {
        imgHuman.setAttribute('src', imgMap['youWin']);
    } else if (computerScore > humanScore) {
        imgComp.setAttribute('src', imgMap['youLose']);
    } else {
        imgHuman.setAttribute('src', imgMap['youDraw']);
        imgComp.setAttribute('src', imgMap['youDraw']);
    }
}

const btns = document.getElementsByClassName('btn')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        let humanChoice = e.currentTarget.value;
        playRound(humanChoice, getComputerChoice());
    })
}
