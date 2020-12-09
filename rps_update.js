game();

function computerPlay() {
    max = 3;
    let select = (Math.floor(Math.random() * Math.floor(max)));
    if (select == 0) {
        return "rock";
    } else if (select == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let winner = "";
    console.log(playerSelection);
    console.log(computerSelection);
    switch(true) {
        case (playerSelection == "rock" && computerSelection == "paper"):
            winner = "Paper beats rock, Computer wins!";
            return winner;
            break;
        case (playerSelection == "rock" && computerSelection == "scissors"):
            winner = "Rock beats scissors, You win!";
            return winner;
            break;
        case (playerSelection == "paper" && computerSelection == "scissors"):
            winner = "Scissors beats paper, Computer wins!";
            return winner;
            break;
        case (playerSelection == "paper" && computerSelection == "rock"):
            winner = "Paper beats rock, You win!";
            return winner;
            break;
        case (playerSelection == "scissors" && computerSelection == "rock"):
            winner = "Rock beats Scissors, Computer wins!";
            return winner;
            break;
        case (playerSelection == "scissors" && computerSelection == "paper"):
            winner = "Scissors beats paper, You win!";
            return winner;
            break;
        case (playerSelection == computerSelection):
            winner = "Draw! Play again!";
            return winner;
            break;    
        default:
            alert("Invalid entry! Please try again!");
            return false;   
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    let endGame = false;

    const results = document.querySelector('#results');
    const scores = document.querySelector('#scores');

    const currentScore = document.createElement('p');
    currentScore.style.fontWeight = "bold";
    currentScore.style.fontSize = "150%";
    currentScore.textContent = "Player score: 0 | Computer score: 0";
    scores.appendChild(currentScore);

    const btn = document.querySelectorAll('button');

        btn.forEach((button) => {

            button.addEventListener('click', () => {
                if (endGame === false && (playerScore !== 5 && computerScore !== 5)) {
                    winner = playRound(button.id, computerPlay());
                    
                    const result = document.createElement('p');
                    result.style.fontWeight = "bold";
                    result.textContent = winner;
                    
                    results.appendChild(result);

                    console.log(playerScore);
                    console.log(computerScore);
                    
                    // Add endgame boolean variable for conditions

                    if (playerScore != 5 && computerScore != 5) {
                        if (winner.includes("You")) {   
                            playerScore++;
                        } else if (winner.includes("Computer")) {
                            computerScore++;
                        }
                        currentScore.textContent = "Player score: " + playerScore + " | Computer score: " + computerScore;
                        scores.appendChild(currentScore);
                    }; 

                    if (playerScore === 5 || computerScore === 5) {
                        endGame = true;
                        const victor = document.createElement('p');
                        victor.style.color = "red";
                        victor.style.fontSize = "150%";
                        victor.style.fontWeight = "bold";
                        if (playerScore > computerScore) {
                            victor.textContent = "Player wins the game!";
                        } else if (computerScore > playerScore) {
                            victor.textContent = "Computer wins the game!";
                        }
                        results.appendChild(victor);
                    }
                }
                    // removeEventListener
                    if (endGame === true) {
                        endGame = false;
                        const playAgain = document.createElement('button');
                        playAgain.innerHTML = "Play again";
                        playAgain.id = 'playAgain';
                        results.appendChild(playAgain);
                        playAgain.addEventListener('click', () => {
                            document.getElementById('results').innerHTML = "";
                            playerScore = 0;
                            computerScore = 0;
                            currentScore.textContent = "Player score: " + playerScore + " | Computer score: " + computerScore;
                            endGame = false;
                        });
                    }
            });
        });     
}