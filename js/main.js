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

setTimeout(timerResult, 4000);
function timerResult() {
    const result = document.querySelector('.indovinati');
    document.querySelector('.indovinati').style.display = 'block';
    result.innerText = 'Hai indovinato' + corretti.length + 'numeri'
}

// Main
const numbers = document.querySelector('.ms_numbers');
const numbersG = [];
const inseriti = [];
const corretti = [];

while (numbersG.length <= 5) {
    const nGenerati = getRandomInt(50);
    numbersG.push(nGenerati);
}

const timerPrompt = setTimeout(function(){
    for(let i = 0; i <= 4; i++){
        const inserisci = Number(prompt('Inserisci il numero'));
        inseriti.push(inserisci);
        console.log(inseriti)
        if(numbersG.includes(inseriti[i])){
            console.log('numero' + inseriti[i] + 'indovinato')
            corretti.push(inseriti[i]);
        } else {  
            console.log('numero sbagliato')
        }
    }
}, 3500);

console.log(corretti)

numbers.innerHTML = numbersG;



