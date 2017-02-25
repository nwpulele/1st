/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,activePlayer,dice,totalScrore;
scores=[0,0];
activePlayer=0;
totalScrore=0;
//dice=0
//console.log(dice);

//Hide dice at begining
document.querySelector(".dice").style.display='none';
document.getElementById("warning-0").style.display='none';
document.getElementById("warning-1").style.display='none';
//This will generate a random number for dice.
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;


//Roll btn event listener.
document.querySelector(".btn-roll").addEventListener('click',function (){
    //Roll a dice
    dice=Math.round(Math.random()*6+1);
    while (dice==0||dice==7) {
        dice=Math.round(Math.random()*6+1);
    }
    console.log(dice);
    //Display result
    var diceObj = document.querySelector(".dice")
    diceObj.style.display='block';
    diceObj.src = 'dice-'+dice+'.png';
    
    //Calculate Current Result
    if (dice!=1) {
        totalScrore = totalScrore+dice;
    }
    else {
        totalScrore = 0
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
    }
    document.querySelector("#current-"+activePlayer).textContent = totalScrore
});


//Hold listener.
document.querySelector(".btn-hold").addEventListener('click',function(){
    //Set current score to 0
    scores[activePlayer] += totalScrore
    document.querySelector('#current-'+activePlayer).textContent = 0
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    totalScrore=0;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
});


document.querySelector(".btn-new").addEventListener('click',function(){
    document.querySelector(".dice").style.display='none';
    document.getElementById("warning-0").style.display='none';
    document.getElementById("warning-1").style.display='none';
    //This will generate a random number for dice.
    document.getElementById("score-0").textContent=0;
    document.getElementById("score-1").textContent=0;
    document.getElementById("current-0").textContent=0;
    document.getElementById("current-1").textContent=0;
     document.querySelector(".player-0-panel").classList.add('active');
     document.querySelector(".player-1-panel").classList.remove('active');
})





