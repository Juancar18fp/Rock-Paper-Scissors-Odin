const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getHumanChoice() {
    let n = prompt("Introduce un número entre 0 y 2");
    if (n < 0 || n > 2) {
        alert("Número no válido");
    } else {
        return parseInt(n);
    }
}