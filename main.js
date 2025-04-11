console.log("Hello")
const playButton = document.getElementById("play-button");
const choiceButtons = document.getElementById("choice-buttons");
let humanScore = 0;
let compScore = 0;
let level = 0;

let scoreDisplay = document.querySelector(".score")


const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")


rock.addEventListener('click', () => playRound("rock", compChoice()));
paper.addEventListener('click', () => playRound("paper", compChoice()));
scissors.addEventListener('click', () => playRound("scissors", compChoice()));
updateScore();
function start(){
    playButton.style.display= "none"
    choiceButtons.style.display = "block"
    playGame()
}

function updateScore(){
    scoreDisplay.textContent = `PLAYER: ${humanScore} | CPU: ${compScore}`;

}

function compChoice(){

    const choices =["Rock", "Paper","Scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices [randomIndex]

}  





function playRound(humanChoice, compChoice){
    compChoice =  compChoice.toLowerCase();
    humanChoice =  humanChoice.toLowerCase();
    if (level >=5) return;
 

    if (humanChoice === compChoice){
        console.log("It's a tie!");
        updateScore()
    } else if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper")
        
    )
        
    {
        humanScore++; 
        console.log("human wins"); // ${} later
        updateScore()
    } else{
        compScore++;
        console.log("Comp wins")
        updateScore()
    }

    level++;
     console.log(`Round ${level}/5 - Score: You ${humanScore} Computer ${compScore}`)
    
     if (level === 5){
        endGame();
     }



}

function playGame(){
    humanScore = 0; 
    compScore = 0;
    level =0;
    updateScore();
    console.log("Game started")
}
function endGame(){
    

    console.log("final result")
    console.log(`final score: Human ${humanScore} - Computer ${compScore}`);


    if (humanScore < compScore){
        console.log("You lose")
    }else if (humanScore > compScore){
        console.log("you win")
    }else{
        console.log("tie")
    }

    playButton.style.display = "block";
    choiceButtons.style.display = "none";
    humanScore = 0; 
    compScore = 0;
    level =0;
}
