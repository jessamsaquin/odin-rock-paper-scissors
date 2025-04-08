console.log("Hello")


function play(){
    console.log("Playyy")
}


function getComputerChoice(){
    const choices =["Rock", "Paper","Scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices [randomIndex]

}  

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?");
    userChoice = userChoice.toLowerCase();

    return userChoice;
}
