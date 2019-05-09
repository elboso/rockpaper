// Core mechanics :

// images
const rock = 'https://image.flaticon.com/icons/svg/1711/1711683.svg';
const paper = 'https://image.flaticon.com/icons/svg/149/149446.svg';
const scissor = 'https://image.flaticon.com/icons/svg/124/124717.svg';

// content
const computerImage = document.querySelector('#computerImg');
const roundResult = document.querySelector('#roundResult');
const finalWord = document.querySelector('#finalWord');

let playerScore = 0;  // keep track of playRound wins
let computerScore = 0;

const list = [rock,paper,scissor];
let playerSelection = 1;

// check buttons then start a game if clicked
const boutons = document.querySelectorAll('button');

boutons.forEach(bouton => {
  bouton.addEventListener('click',
  ()=>{playerSelection = bouton.name});
  bouton.addEventListener('click', ()=>{roundResult.textContent=(playRound(playerSelection, computerPlay()));
  });
  bouton.addEventListener('click', ()=>console.log(`player : ${playerScore} I computer ${computerScore}`));
  bouton.addEventListener('click', final );

});

// select a choice for the computer and change teh image
function computerPlay () {
const choice = Math.floor(Math.random() * Math.floor(3));
computerImage.src = list[choice];
return choice;
};

function playRound (pSelect, cSelect) {
  if (pSelect == cSelect) {
    return 'Wow it\'s a draw'
  }
  else if (pSelect==0) {
    if (cSelect==1) {
      computerScore += 1;
      return 'Paper beats Rock, you lost'

    }
    if (cSelect==2) {
      playerScore += 1;
      return 'Rock beats Scissor, you won !'
    }
  }

  else if (pSelect==1) {
    if (cSelect==0) {
      playerScore += 1;
      return 'Paper beats Rock, you won!'
    }
    if (cSelect==2) {
      computerScore += 1;
      return 'Scissor beats Paper, you lost'
    }
  }

  else if (pSelect==2) {
    if (cSelect==0) {
      computerScore += 1;
      return 'Rock beats Scissor, you lost'
    }
    if (cSelect==1) {
      playerScore += 1;
      return 'Scissor beats Paper, you won!'
    }
  }
};

function final () {
  if (playerScore>4) {
    finalWord.textContent = "YOU HAVE WON";
    finalWord.classList.add('victory');
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore>4) {
    finalWord.textContent = "YOU HAVE LOST";
    finalWord.classList.add('defeat');
    playerScore = 0;
    computerScore = 0;
  }
  else return;
}
