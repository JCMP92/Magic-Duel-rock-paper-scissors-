// GAME: This is the game code, with this the game will work 
        
    let victory = 0;
    let defeat = 0;

    const eachButtons = document.querySelectorAll('.player-choice');
    eachButtons.forEach(elem => elem.addEventListener('click', function game() {
         
        let playerSelection = this.id;

        function computerPlay() {
            const spells = ["dragon", "poison", "frost"];
            return spells[Math.floor(Math.random() * spells.length)];
        };

        let computerSelection = computerPlay();
        
        let gameRound = playRound(playerSelection, computerSelection);

            if(gameRound === "Draw"){
                document.getElementById("comments").innerHTML ="Meh... It´s a Draw.";
            }else if(gameRound === "Loose"){
            defeat ++;
            document.getElementById("comments").innerHTML ="You loose this one.";
            }else if(gameRound === "Win"){
                victory ++;
                document.getElementById("comments").innerHTML ="Great! you are awesome.";
            }
        
        function playRound(playerSelection, computerSelection) {
            if(playerSelection === computerSelection){
                return "Draw";
            } else if (playerSelection === "dragon" && computerSelection === "poison" 
            || playerSelection === "frost" && computerSelection === "dragon" 
            || playerSelection === "poison" && computerSelection === "frost"){
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
                document.getElementById("comments").innerHTML ='Amazing! you are the new Champion';
                eachButtons.forEach(elem => elem.setAttribute("disabled", 1));
                document.getElementById("result-text").innerHTML = 'but do it wisely...';
                //endGame();
                
            } else if(defeat === 5){
                document.getElementById("comments").innerHTML ='You died...';
                eachButtons.forEach(elem => elem.setAttribute("disabled", 1));
                document.getElementById("result-text").innerHTML = 'but do it wisely...';
                //endGame();
            }
        
        function endGame() {
            victory = 0;
            defeat = 0; 
            document.getElementById("victories").innerHTML = victory;
            document.getElementById("looses").innerHTML = defeat;
            document.getElementById("comp-spell").innerHTML = '';
            document.getElementById("comments").innerHTML = '';
            eachButtons.forEach(elem => elem.removeAttribute("disabled"));     
        }   
        
        const restartButton = document.getElementById('play-again');
        restartButton.addEventListener('click', endGame);
    }));


    eachButtons.forEach(elem => elem.addEventListener('mouseover', func, false));
    eachButtons.forEach(elem => elem.addEventListener('mouseout', func1, false));
    function func(){
        if (this.id === 'dragon'){
            document.getElementById("result-text").innerHTML ='DRAGON´S BREATH: strong against PERMA FROST, weak against POISON CLOUD';
        } else if (this.id === 'poison') {
            document.getElementById("result-text").innerHTML ='POISON CLOUD: strong against DRAGON´S BREATH, weak against PERMA FROST';
        } else if (this.id === 'frost') {
            document.getElementById("result-text").innerHTML ='PERMA FROST: strong against POISON CLOUD, weak against DRAGON´S BREATH';
        }
        
    }

    function func1(){
        document.getElementById("result-text").innerHTML = 'but do it wisely...';
    }



    
    
