// GAME
        
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
    document.getElementById("victories").innerHTML = victory;
    document.getElementById("looses").innerHTML = defeat;

        if(victory === 5){
            document.getElementById("final-msg").innerHTML ='Amazing! you are the new Champion';
            eachButtons.forEach(elem => elem.setAttribute("disabled", 1));
            document.getElementById("result-text").innerHTML = 'but do it wisely...';
            modalDisplay();
            
        } else if(defeat === 5){
            document.getElementById("final-msg").innerHTML ='You died...';
            eachButtons.forEach(elem => elem.setAttribute("disabled", 1));
            document.getElementById("result-text").innerHTML = 'but do it wisely...';
            modalDisplay();
        }
    
    function endGame() {
        victory = 0;
        defeat = 0; 
        document.getElementById("victories").innerHTML = victory;
        document.getElementById("looses").innerHTML = defeat;
        document.getElementById("comments").innerHTML = 'Are you ready?';
        eachButtons.forEach(elem => elem.removeAttribute("disabled")); 
        icon.classList.remove('fa-dragon', 'fa-skull-crossbones', 'fa-snowflake');
        icon.classList.add('fa-book-dead');
        icon.style.color = '#928da1';
        modalHide();    
    }   
    
    const restartButton = document.getElementById('play-again');
    restartButton.addEventListener('click', endGame);

    //Computer choice icons
    const icon = document.getElementById('enemy-icon');
    icon.classList.remove('fa-book-dead', 'fa-dragon', 'fa-skull-crossbones', 'fa-snowflake');
        if (computerSelection === 'dragon') {
            icon.classList.add('fa-dragon');
            icon.style.color = '#eb6543';
        } else if (computerSelection === 'poison'){
            icon.classList.add('fa-skull-crossbones');
            icon.style.color = '#6df36d';
        } else if (computerSelection === 'frost') {
            icon.classList.add('fa-snowflake');
            icon.style.color = '#5f97f3';
        };

//Modal functions
    function modalDisplay() {
        const modal = document.getElementById('my-modal');
        modal.style.display = "block";
      };
    function modalHide() {
        const modal = document.getElementById('my-modal');
        modal.style.display = "none";
      } 


}));

// Display text when :hover over buttons
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

