const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");

const userResult = document.getElementById("result-user-stat");
const compResult = document.getElementById("result-comp-stat");
const finalResult = document.getElementById("result-final-stat");

const choiceRock = document.getElementById("r");
const choicePaper = document.getElementById("p");
const choiceScissor = document.getElementById("s");

let userChoice = '';
let compChoice = '';


// Function for Computer Choice 
function compGame(){
    let compVal = 'rps';
    compChoice = compVal[Math.floor(Math.random()*3)];
    if (compChoice == 'r') {
        compResult.innerHTML = compResult.innerText + choiceRock.innerHTML;
    } else if(compChoice == 'p'){
        compResult.innerHTML = compResult.innerText + choicePaper.innerHTML;
    }else if(compChoice == 's'){
        compResult.innerHTML = compResult.innerText + choiceScissor.innerHTML;
    }
}



// Function for User Choice 
const play = document.querySelectorAll(".choice");

play.forEach(function gameStart(val){
    val.addEventListener("click", function game(e){
        userChoice = e.currentTarget.id;
        if (userChoice == 'r') {
            userResult.innerHTML = userResult.innerText + choiceRock.innerHTML;
        }
         else if(userChoice == 'p'){
            userResult.innerHTML = userResult.innerText + choicePaper.innerHTML;
        }
        else if(userChoice == 's'){
            userResult.innerHTML = userResult.innerText + choiceScissor.innerHTML;
        }
        compGame();
        winner();
    })
})


// Function for Game Result 
function winner() {
    if (userChoice == compChoice) {
        finalResult.innerText = "Winner: Tie";
    } else {
        if(userChoice == 'r'){
           if(compChoice == 'p'){
            finalResult.innerText = "Winner: Computer";
            compScoreVal.innerText = Number(compScoreVal.innerText)+1;
           } else {
            finalResult.innerText = "Winner: User";
            userScoreVal.innerText = Number(userScoreVal.innerText)+1;
           }
        }
      else if(userChoice == 'p'){
        if(compChoice == 's') {
            finalResult.innerText = "Winner: Computer";
            compScoreVal.innerText = Number(compScoreVal.innerText)+1;
        } else {
            finalResult.innerText = "Winner: User";
            userScoreVal.innerText = Number(userScoreVal.innerText)+1;
        }
      }
      else if(userChoice == 's'){
        if(compChoice == 'r') {
            finalResult.innerText = "Winner: Computer";
            compScoreVal.innerText = Number(compScoreVal.innerText)+1;
        } else {
            finalResult.innerText = "Winner: User";
            userScoreVal.innerText = Number(userScoreVal.innerText)+1;
        }
      }

    }
    
}





