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
    if (op != "PIEDRA" && op != "PAPEL" && op != "TIJERA") {
        return "PIEDRA"
    } else {
        return op;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "PIEDRA" && computerChoice === "TIJERA" ||
        humanChoice === "PAPEL" && computerChoice === "PIEDRA" ||
        humanChoice === "TIJERA" && computerChoice === "PAPEL") {
        console.log(`Has ganado la ronda! ${humanChoice} gana a ${computerChoice}`)
        humanScore++;
    }
    else if (computerChoice === "PIEDRA" && humanChoice === "TIJERA" ||
        computerChoice === "PAPEL" && humanChoice === "PIEDRA" ||
        computerChoice === "TIJERA" && humanChoice === "PAPEL") {
        console.log(`Has perdido la ronda! ${humanChoice} pierde contra ${computerChoice}`)
        computerScore++;
    } else {
        console.log("Has empatado la ronda!!!")
    }
}

function playGame(){
    const ROUNDS = 5;
    let actualRound = 1;

    while(actualRound <= ROUNDS){
        console.log("EMPIEZA LA RONDA NÚMERO "+actualRound);
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`PUNTOS -> Tú: ${humanScore}, Máquina: ${computerScore}`)
        actualRound++;
        console.log("")
    }

    if(humanScore > computerScore){
        console.log("¡ENHORABUENA! HAS GANADO LA PARTIDA")
    } else if (computerScore > humanScore){
        console.log("VAYA!!! LA MÁQUINA TE HA GANADO LA PARTIDA");
    } else {
        console.log("HABÉIS EMPATADA LA PARTIDA ¡QUE ABURRIDO!")
    }
}

playGame();