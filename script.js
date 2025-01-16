let humanScore = 0;
let computerScore = 0;

const PIEDRA = "PIEDRA";
const PAPEL = "PAPEL";
const TIJERA = "TIJERA";

const text = document.querySelector(".winner-text");
const playAgain = document.querySelector(".play-again");
const playerScore = document.querySelector(".player-score-num");
const cpuScore = document.querySelector(".cpu-score-num");
const buttons = document.querySelectorAll(".signbtn");
const playAgainButton = document.querySelector(".reset");

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
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
    if (computerScore >= 5 || humanScore >= 5) {
        playAgain.style.cssText = "visibility: visible;";
        text.textContent = humanScore===5 ? "HAS GANADO LA PARTIDA ¡¡¡ENHORABUENA!!!" : "HAS PERDIDO LA PARTIDA";
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
        setScore();
    }
}

function setScore(){
    playerScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
}

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


playAgainButton.addEventListener("click", ()=> {
    text.textContent = "¿ESTÁS PREPARADO?";
    humanScore = 0;
    computerScore = 0;
    playAgain.style.cssText = "visibility: hidden;";
    setScore();
});