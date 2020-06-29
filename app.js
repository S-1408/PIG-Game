var scores ,activePlayer, roundScore, gamePlaying;
// dice;

init();

var lastDice;
//dice =Math.floor(Math.random()*6)+1;
// console.log(dice);

/*we set a value at here*/
//document.querySelector("#current-"+activePlayer).textContent= dice;
// document.querySelector("#current-"+activePlayer).innerHTML = '<em>' + dice +'</em>'

/*we get a value at here*/

// var x = document.querySelector('#score-0').textContent;
// console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

        // 1.random number
var dice =Math.floor(Math.random()*6)+1;
//2. display the result
 var diceDOM = document.querySelector('.dice');
  diceDOM.style.display="block";
  diceDOM.src='image/dice-' +dice+ '.jpg'
//3.updating the round score if a roller no is not as 1
 if(dice === 6 && lastDice ===6){
//lose scores
  scores[activePlayer]= 0;
  document.querySelector('.score-'+activePlayer).textContent = '0';
  nextPlayer();
 }

else if(dice !==1){
     //Add score
      roundScore += dice;
      document.querySelector('#current-'+ activePlayer).textContent = roundScore;
 }else{
// next player
nextPlayer();
  
}
  lastDice = dice;


    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //1.Add current score to the global score

    scores[activePlayer] += roundScore;

    //2.update UI

    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScores;
    if(input){
      winningScores = input;
    }else{
      winningScores = 100;
    }
    //3. check if player won the game
    
      if(scores[activePlayer] >= winningScores){
        document.querySelector('#name-'+activePlayer).textContent= "WINNER!";
        document.querySelector('.dice').style.display='none';
      document.querySelector('.player-'+activePlayer+ '-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+ '-panel').classList.remove('active');
      gamePlaying =false;
      }else{
              //4.nextplayer
              nextPlayer();
      }
      

    }
    
   
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active');
      // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display='none';
   
}

document.querySelector('.btn-new').addEventListener('click' ,init)

function init(){
    scores=[0,0];
activePlayer=0;
roundScore=0;
gamePlaying = true;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');

document.querySelector('.dice').style.display='none';

}
