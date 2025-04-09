console.log("Hello")

let humanScore = 0;
let compScore = 0;

function play(){
    console.log("Playyy")
}


function compChoice(){

    const choices =["Rock", "Paper","Scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices [randomIndex]

}  

function humanChoice(){

    let userChoice = prompt("Rock, Paper or Scissors?");
    userChoice = userChoice.toLowerCase();

    return userChoice;
}


function playRound(humanChoice, compChoice){
    compChoice =  compChoice.toLowerCase();
    humanChoice =  humanChoice.toLowerCase();
    


    if (humanChoice === compChoice){
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper")
    ){
        humanScore++; 
        console.log("human wins"); // ${} later
    } else{
        compScore++;
        console.log("Comp wins")
    }
    console.log("")
}

function playGame(){
    humanScore = 0; 
    compScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelect = humanChoice()
        const compSelect = compChoice()

        playRound(humanSelect, compSelect)
    }

    console.log("final result")
    console.log(`final score: Human ${humanScore} - Computer ${compScore}`);


    if (humanScore < compScore){
        console.log("You lose")
    }else if (humanScore > compScore){
        console.log("you win")
    }else{
        console.log("tie")
    }
}
