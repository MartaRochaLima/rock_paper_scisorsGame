

const playerSelection = "paper";
const computerSelection= getComputerChoice();

function getComputerChoice(){
const choices=["rock","scisors","paper"];
const randomIndex =Math.floor(Math.random()*3);
return choices[randomIndex];


}

//A função Math.floor() em JavaScript retorna o maior número inteiro menor ou igual ao número fornecido.
//Math.random(): Esta função retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo). 
//Por exemplo, pode retornar valores como 0.5, 0.2345623452, etc.

function playTime(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "scisors") {

    console.log("You win! Rock beats scisors!")
  } else if (playerSelection == "rock" && computerSelection == "rock") {

    console.log("It's a tie!")

  }else if (playerSelection == "rock" && computerSelection == "paper") {

    console.log("You lose! Paper beats rock!")

  }else if (playerSelection == "paper" && computerSelection == "rock") {

    console.log("You win! Paper beats rock!")

  }else if (playerSelection == "scisors" && computerSelection == "rock") {

    console.log("You lose!Rock beats scisors!")

  } else if (playerSelection == "paper" && computerSelection == "paper") {

    console.log("It's a tie!")

  }else if (playerSelection == "paper" && computerSelection == "scisors") {

    console.log("You lose!Scisors beat paper!")

  }else if (playerSelection == "scisors" && computerSelection == "scisors") {

    console.log("It's a tie!")

  }else  {

    console.log("You win! Scisors beat paper!")

  }

}

console.log(playTime(playerSelection,computerSelection));