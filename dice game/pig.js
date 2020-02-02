var scores, roundScore, dice,activePlayer;
totalscores = [0,0];   // To calculate total score
roundScore = 0;   // to calculate current score
activePlayer = 0;    // to find current active player

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//click function using event handlers

document.querySelector('.btn-roll').addEventListener('click',function(){
    //random number generator
    var dice = Math.floor(Math.random()*6)+1;   
    var diceDom = document.querySelector('.dice');  
    diceDom.style.display = 'block';

    diceDom.src = 'dice-'+ dice + '.png';       //for differnet dice image
    //update the round score

    if(dice > 1){
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    else{
        roundScore = 0;
        //document.querySelector('#current-'+activePlayer).textContent = roundScore;

        (activePlayer == 0)? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        //document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  totalscores[activePlayer] += roundScore;
  document.querySelector('#score-'+activePlayer).textContent = totalscores[activePlayer]
})

