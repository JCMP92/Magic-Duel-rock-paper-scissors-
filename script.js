// GAME: This is the game code, with this the game will work 
        
    let victory = 0;
    let defeat = 0;

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
                document.getElementById("result-text").innerHTML ="Meh... It´s a Draw.";
            }else if(gameRound === "Loose"){
            defeat ++;
            document.getElementById("result-text").innerHTML ="You loose this one.";
            }else if(gameRound === "Win"){
                victory ++;
                document.getElementById("result-text").innerHTML ="Great! you are awesome.";
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
        document.getElementById("comp-spell").innerHTML = computerSelection;

            if(victory === 5){
                document.getElementById("result-text").innerHTML ='Amazing! you are the new Champion';
                eachButtons.forEach(elem => elem.setAttribute("disabled", 1));
                //endGame();
                
            } else if(defeat === 5){
                document.getElementById("result-text").innerHTML ='You died...';
                eachButtons.forEach(elem => elem.setAttribute("disabled", 1));
                //endGame();
            }
        
        function endGame() {
            victory = 0;
            defeat = 0; 
            document.getElementById("victories").innerHTML = victory;
            document.getElementById("looses").innerHTML = defeat;
            document.getElementById("comp-spell").innerHTML = '';
            document.getElementById("result-text").innerHTML = 'but do it wisely...';
            eachButtons.forEach(elem => elem.removeAttribute("disabled"));     
        }   
        
        const restartButton = document.getElementById('play-again');
        restartButton.addEventListener('click', endGame);
    }));
    
    
