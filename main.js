
let resultAfterRound = document.querySelector('#the-result')
let playerScore = document.querySelector('#player-score')
let computerScore = document.querySelector('#computer-score')
let playerWin = 0
let compWin = 0

document.querySelector('.rock').addEventListener('click', playRound)
document.querySelector('.paper').addEventListener('click', playRound)
document.querySelector('.scissors').addEventListener('click', playRound)
document.querySelector('#reset').addEventListener('click', resetAll)

function resetAll() {
  playerWin = 0
  compWin = 0
  resultAfterRound.innerText = `Select 🪨, 📄 or ✂️`
  playerScore.innerText = `Your score: ${playerWin}`
  computerScore.innerText = `Computer score: ${compWin}`
}

function getComputerChoice() {
  let x = Math.ceil(Math.random() * 3)
  if (x == 1) {
    return 'rock'
  } else if (x == 2) {
    return 'paper'
  } else return 'scissors'
}


function playRound(click) {

  let comp = getComputerChoice()
  let player = ''

  if (click.target.classList.contains('rock')) {
    player = 'rock'
  } else if (click.target.classList.contains('paper')) {
    player = 'paper'
  } else if (click.target.classList.contains('scissors')) {
    player = 'scissors'
  }

  if (comp == 'rock' && player == 'paper') {
    ++playerWin
    resultAfterRound.innerText = `You ➔ 📄\nComputer ➔ 🪨\nYou won!`

  } else if (comp == 'rock' && player == 'scissors') {
    ++compWin
    resultAfterRound.innerText = `You ➔ ✂️\nComputer ➔ 🪨\nYou lost!`

  } else if (comp == 'scissors' && player == 'paper') {
    ++compWin
    resultAfterRound.innerText = `You ➔ 📄\nComputer ➔ ✂️\nYou lost!`

  } else if (comp == 'scissors' && player == 'rock') {
    ++playerWin
    resultAfterRound.innerText = `You ➔ 🪨\nComputer ➔ ✂️\nYou won!`

  } else if (comp == 'paper' && player == 'rock') {
    ++compWin
    resultAfterRound.innerText = `You ➔ 🪨\nComputer ➔ 📄\nYou lost!`

  } else if (comp == 'paper' && player == 'scissors') {
    ++playerWin
    resultAfterRound.innerText = `You ➔ ✂️\nComputer ➔ 📄\nYou won!`

  } else if (comp == player) {
    
    if (comp == 'rock') {
      resultAfterRound.innerText = `You both chose 🪨\nDraw!`
    } else if (comp == 'paper') {
      resultAfterRound.innerText = `You both chose 📄\nDraw!`
    } else if (comp == 'scissors') {
      resultAfterRound.innerText = `You both chose ✂️\nDraw!`
    }
    
  }

  playerScore.innerText = `Your score: ${playerWin}`
  computerScore.innerText = `Computer score: ${compWin}`

}
