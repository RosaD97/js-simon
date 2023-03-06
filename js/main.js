'use strict';

// Funzione Genera numero random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Dopo un tempo impostato i numeri scompaiono
setTimeout(timerNumeri, 3000);
function timerNumeri() {
    numbers.innerHTML = 'indovina';
}

// Main
const numbers = document.querySelector('.ms_numbers');
const numbersG = [];

while (numbersG.length <= 5) {
    const nGenerati = getRandomInt(50);
    numbersG.push(nGenerati);
}

numbers.innerHTML = numbersG;
