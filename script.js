let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let str = ""
    if (n === 0) {
        return "PIEDRA";
    } else if (n === 1) {
        return "PAPEL";
    } else {
        return "TIJERA";
    }
}

function getHumanChoice() {
    let op = prompt("Introduce piedra, papel o tijera. (piedra por defecto)");
    op = op.toUpperCase();
    if (op != "PIEDRA" || op != "PAPEL" || op != "TIJERA") {
        return "PIEDRA"
    } else {
        return op;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "PIEDRA" && computerChoice === "TIJERA" ||
        humanChoice === "PAPEL" && computerChoice === "PIEDRA" ||
        humanChoice === "TIJERA" && computerChoice === "PAPEL") {
        console.log(`Has ganado! ${humanChoice} gana a ${computerChoice}`)
        humanScore++;
    }
    else if (computerChoice === "PIEDRA" && humanChoice === "TIJERA" ||
        computerChoice === "PAPEL" && humanChoice === "PIEDRA" ||
        computerChoice === "TIJERA" && humanChoice === "PAPEL") {
        console.log(`Has perdido! ${humanChoice} pierde contra ${computerChoice}`)
        computerScore++;
    } else {
        console.log("Has empatado!!!")
    }
}