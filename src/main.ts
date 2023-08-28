import './style.css'

let currentPlayer = 1
let playerChoice: string[] = []
const maxPlayers = 2
const playersChoices = document.querySelectorAll('img')
const player = document.querySelector('h2')

function playersMove(event: MouseEvent) {
  const playersChoice = event.target

  if (playersChoice instanceof HTMLImageElement) {
    playerChoice[currentPlayer] = playersChoice.className
  }
  currentPlayer++
  if (player instanceof HTMLHeadingElement && currentPlayer <= maxPlayers) {
    player.textContent = `Player ${currentPlayer}`
  }
  checkForEndGame()
}

function checkForWinner() {
  //return unless playersChoice is set for 0 and 1 (or more if more players)
  if (playerChoice[1] == playerChoice[2]) {
    window.alert(`You both chose ${playerChoice[1]}! Try again!`)
  } else {
    switch (playerChoice[1]) {
      case 'rock':
        switch (playerChoice[2]) {
          case 'scissors':
            window.alert(`Rock beats Scissors Player 1 wins!`)
            break
          case 'paper':
            window.alert(`Paper beats Rock Player 2 wins!`)
            break
        }
        break
      case 'paper':
        switch (playerChoice[2]) {
          case 'scissors':
            window.alert(`Scissors beat Paper Player 2 wins!`)
            break
          case 'rock':
            window.alert(`Paper beats Rock Player 1 wins!`)
            break
        }
        break
      case 'scissors':
        switch (playerChoice[2]) {
          case 'rock':
            window.alert(`Rock beats Scissors Player 2 wins!`)
            break
          case 'paper':
            window.alert(`Scissors beat Paper Player 1 wins!`)
            break
        }
        break
    }
  }
  currentPlayer = 1
  if (player instanceof HTMLHeadingElement && currentPlayer <= maxPlayers) {
    player.textContent = `Player ${currentPlayer}`
  }
}

function checkForEndGame() {
  if (currentPlayer > maxPlayers) {
    checkForWinner()
  }
}

playersChoices.forEach((choice) =>
  choice.addEventListener('click', playersMove)
)
