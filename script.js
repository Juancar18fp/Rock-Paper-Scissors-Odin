let humanScore = 0;
let computerScore = 0;

const PIEDRA = "PIEDRA";
const PAPEL = "PAPEL";
const TIJERA = "TIJERA";

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let str = ""
    if (n === 0) {
        return PIEDRA;
    } else if (n === 1) {
        return PAPEL;
    } else {
        return TIJERA;
    }
}

function getHumanChoice() {
    let op = prompt("Introduce piedra, papel o tijera. (piedra por defecto)");
    op = op.toUpperCase();
    if (op != PIEDRA && op != PAPEL && op != TIJERA) {
        return PIEDRA
    } else {
        return op;
    }
}

function playRound(humanChoice, computerChoice) {
    const text = document.querySelector(".winner-text");
    if (computerScore >= 5 || humanScore >= 5) {
        
    } else {
        if (humanChoice === PIEDRA && computerChoice === TIJERA ||
            humanChoice === PAPEL && computerChoice === PIEDRA ||
            humanChoice === TIJERA && computerChoice === PAPEL) {
            text.textContent = `Has ganado la ronda!`;
            humanScore++;
        }
        else if (computerChoice === PIEDRA && humanChoice === TIJERA ||
            computerChoice === PAPEL && humanChoice === PIEDRA ||
            computerChoice === TIJERA && humanChoice === PAPEL) {
            text.textContent = `Has perdido la ronda!`;
            computerScore++;
        } else {
            text.textContent = "Has empatado la ronda!!!";
        }
        const playerScore = document.querySelector(".player-score-num");
        const cpuScore = document.querySelector(".cpu-score-num");
        playerScore.textContent = humanScore;
        cpuScore.textContent = computerScore;
    }
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.matches("div#rockBtn.sign")) {
            playRound(PIEDRA, getComputerChoice());
        } else if (e.target.matches("div#paperBtn.sign")) {
            playRound(PAPEL, getComputerChoice());
        } else {
            playRound(TIJERA, getComputerChoice());
        }
    });
});