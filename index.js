const choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice () {
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}


function playGame () {
    let rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        let choices = [];
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        choices.push(`Yours: ${humanChoice} Comps: ${computerChoice}`);

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
            alert("A draw, redo the round");
            rounds += 1;
        }
    }

    while (rounds > 0) {
        playRound();
        rounds--;
    }
}

playGame();
