const choices = document.querySelectorAll(".choices");
const songs = [
  "./../assets/music/Balrog.mp3",
  "./../assets/music/Bison.mp3",
  "./../assets/music/Blanka.mp3",
  "./../assets/music/ChunLi.mp3",
  "./../assets/music/Dhalsim.mp3",
  "./../assets/music/Guile.mp3",
  "./../assets/music/Honda.mp3",
  "./../assets/music/Ken.mp3",
  "./../assets/music/Ryu.mp3",
  "./../assets/music/Sagat.mp3",
  "./../assets/music/Vega.mp3",
"./../assets/music/Zangief.mp3"
];

const url = songs[Math.floor(Math.random() * songs.length)];
const ost = new Audio(url);
const win = new Audio('./../assets/sounds/you-win.mp3');
const lose = new Audio('./../assets/sounds/you-lose.mp3');
const paperSound = new Audio('./../assets/sounds/paper-bag-snd.m4a');
const vomitSound = new Audio('./../assets/sounds/vomit-snd.m4a');
const plasticSound = new Audio('./../assets/sounds/plastic-bag-snd.m4a');
const nice = new Audio('./../assets/sounds/nice.m4a');
const nope = new Audio('./../assets/sounds/nope.m4a');
const tie = new Audio('./../assets/sounds/tie.m4a');
const hit = new Audio('./../assets/sounds/hit.wav');
const groundHit = new Audio('./../assets/sounds/ground-hit.wav');
const ko = new Audio('./../assets/sounds/KO.wav');
const perferct = new Audio('./../assets/sounds/perferct.mp3');

const retryBtn = document.querySelector('.retry');
const choicesBtn = document.querySelector('#choices button');

window.onmouseover = () =>  {
  ost.play();
}

ost.loop = true;


let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.onclick = (e) => {
    const playerChoice = e.target.textContent;

    const computerChoices = ["Paper", "Vomit", "Plastic"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    
    compareChoices(playerChoice, computerChoice);
  
    setTimeout(() => {
      if (checkWinner()) {
          playerScore = 0;
          computerScore = 0;
          
          choicesBtn.setAttribute('disabled', 'true');
          retryBtn.classList.remove('hidden');
  
          retryBtn.onclick = () => {
            setTimeout(() => {
              location.reload();
            }, 500);
          }
      } else {
        return;
      }
    }, 1000)

  }
});

function compareChoices(playerChoice, computerChoice) {

  const playerMovement = document.querySelector('.playerIdling');
  const computerMovement = document.querySelector('.computerIdling');

  // Check for a Tie
  if (playerChoice === computerChoice) {
    tie.play();
    return;
  }

  // Player plays Paper
  if (playerChoice === "Paper") {
    if (computerChoice === "Plastic") {
      computerMovement.classList.remove('computerIdling');
      computerMovement.classList.add('computerHit');
      
      setTimeout(() => {
        computerMovement.classList.add('computerIdling');
        computerMovement.classList.remove('computerHit');
      }, 800);
      
      hit.play();
      nice.play();
      
      playerScore++;
      
      updateScore('player', playerScore);
      updateLifebars('computer', playerScore);
    } else {
      hit.play();
      nope.play();
      
      playerMovement.classList.remove('playerIdling');
      playerMovement.classList.add('playerHit');
      
      setTimeout(() => {
        playerMovement.classList.add('playerIdling');
        playerMovement.classList.remove('playerHit');
      }, 800);
      
      
      computerScore++;
      
      updateScore('computer', computerScore);
      updateLifebars('player', computerScore);
    }
  }
  // Player plays Vomit
  else if (playerChoice === "Vomit") {
    if (computerChoice === "Paper") {
      computerMovement.classList.remove('computerIdling');
      computerMovement.classList.add('computerHit');
      
      setTimeout(() => {
        computerMovement.classList.add('computerIdling');
        computerMovement.classList.remove('computerHit');
      }, 800);
      
      hit.play();
      nice.play();
      
      playerScore++;
      updateScore('player', playerScore);
      updateLifebars('computer', playerScore);
    } else {
      hit.play();
      nope.play();
      
      playerMovement.classList.remove('playerIdling');
      playerMovement.classList.add('playerHit');
      
      setTimeout(() => {
        playerMovement.classList.add('playerIdling');
        playerMovement.classList.remove('playerHit');
      }, 800);
      
      computerScore++;
      updateScore('computer', computerScore);
      updateLifebars('player', computerScore)
    }
  }
  // Player plays Plastic
  else if (playerChoice === "Plastic") {
    if (computerChoice === "Vomit") {
      computerMovement.classList.remove('computerIdling');
      computerMovement.classList.add('computerHit');
      
      setTimeout(() => {
        computerMovement.classList.add('computerIdling');
        computerMovement.classList.remove('computerHit');
      }, 800);
      
      hit.play();
      nice.play();
      
      playerScore++;
      updateScore('player', playerScore);
      updateLifebars('computer', playerScore);
    } else {
      hit.play();
      nope.play();
      
      playerMovement.classList.remove('playerIdling');
      playerMovement.classList.add('playerHit');
      
      setTimeout(() => {
        playerMovement.classList.add('playerIdling');
        playerMovement.classList.remove('playerHit');
      }, 800);
      
      computerScore++;
      updateScore('computer', computerScore);
      updateLifebars('player', computerScore);
    }
  }
}

function updateScore(winner, value) {
  const currentDisc = document.querySelector(`.${winner}-score-${value}`);
  currentDisc.classList.add('won')
}

function updateLifebars(loser, value) {
  const chunk = document.querySelector(`.${loser}-chunk-${value}`);
  chunk.style.background = 'transparent';
}

function checkWinner() {
    if (playerScore === 3 || computerScore === 3) {
        playerScore === 3 ?  win.play() : lose.play();
        return true;
    }
    return false;
}

