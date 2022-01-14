
    let victory = 0;
    let defeat = 0;
    const round = 5;
    
    const eachButtons = document.querySelectorAll('input');
    eachButtons.forEach(elem => elem.addEventListener('click', function game() {
         
        let playerSelection = this.id;

        function computerPlay() {
            const spells = ["rock", "paper", "scissors"];
            return spells[Math.floor(Math.random() * spells.length)];
        };

        let computerSelection = computerPlay();
        
        let gameRound = playRound(playerSelection, computerSelection);

            if(gameRound === "Draw"){
                document.getElementById("comp-choice").innerHTML ="Meh... It´s a Draw.";
            }else if(gameRound === "Loose"){
            defeat ++;
            document.getElementById("comp-choice").innerHTML ="You loose this one.";
            }else if(gameRound === "Win"){
                victory ++;
                document.getElementById("comp-choice").innerHTML ="Great! you are awesome.";
            }
        
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
        console.log(computerSelection);
        // document.getElementById("comp-choice").innerHTML = computerSelection;
        document.getElementById("victories").innerHTML = victory;
        document.getElementById("looses").innerHTML = defeat;

            if(victory === 5){
                console.log("Amazing! you are the new Champion");
                endGame();
            } else if(defeat === 5){
                console.log("You died...");
                endGame();
            }
        
        function endGame() {
            victory = 0;
            defeat = 0;      
        }    
    }));
    
    
    // const rockBtn = document.getElementById("rock");
    // rockBtn.addEventListener('click', function () {
    //     console.log(this.id);
    // });
    // const paperBtn = document.getElementById("paper");
    // paperBtn.addEventListener('click', function () {
    //     console.log(this.id);
    // });
    
    // const scissBtn = document.getElementById("scissors");
    // scissBtn.addEventListener('click', function () {
    //     console.log(this.id);
    // });


    
    // for (let i = 0; i < round; i++) {
    // let playerSelection = prompt("Choose one: Rock, Paper or Scissors").toLowerCase();
    
     
    // let score ={
    //     'Wins':victory,
    //     'Defeats':defeat,
    // }; 
    // if (victory > defeat) {
    //     console.log("Amazing! you are the new Champion")
    //     return score;
    // } else {
    //     console.log("You died...")
    //     return score;
    // };