function game() {
    let victory = 0;
    let defeat = 0;
    const round = 5;

    for (let i = 0; i < round; i++) {
    let playerSelection = prompt("Choose one: Rock, Paper or Scissors").toLowerCase();
    function computerPlay() {
        const spells = ["rock", "paper", "scissors"];
        return spells[Math.floor(Math.random() * spells.length)];
        };
    let computerSelection = computerPlay();
        let gameRound = playRound(playerSelection, computerSelection);
    if(gameRound === "Draw"){
    console.log("Meh... It´s a Draw.");
    }else if(gameRound === "Loose"){
    defeat ++;
    console.log("You loose this one.");
    }else if(gameRound === "Win"){
        victory ++;
        console.log("Great! you are awesome.");
      }
    };
     
    let score ={
        'Wins':victory,
        'Defeats':defeat,
    }; 
    if (victory > defeat) {
        console.log("Amazing! you are the new Champion")
        return score;
    } else {
        console.log("You died...")
        return score;
    };

    function playRound(playerSelection, computerSelection) {
    
            if(playerSelection === computerSelection){
                return "Draw";
            } else if (playerSelection === "rock" && computerSelection === "paper" 
            || playerSelection === "scissors" && computerSelection === "rock" 
            || playerSelection === "paper" && computerSelection === "scissors"){
                return "Loose";
     
            } else { 
                return "Win";
    
            }        
    } 
};

