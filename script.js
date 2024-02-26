let score=JSON.parse(localStorage.getItem('score')) || {
  win: 0,  
  loss: 0,
  tie: 0
};

/*if(score===null){
  score= {
    Wins: 0,  
    Losses: 0,
    Ties: 0
  };
}*/

updateScoreElement();

function playGame(playerMove){
  const computerMove=pickComputerMove();
  let result='';

  if(playerMove==='rock'){
    if(computerMove==='rock'){
      result='tie';
    }
    else if(computerMove==='paper'){
      result='You lose';
    }
    else {
      result='You win';
    }
  }
  else if(playerMove==='paper'){
    if(computerMove==='rock'){
      result='You win';
    }
    else if(computerMove==='paper'){
      result='tie';
    }
    else {
      result='You lose';
    }
  }
  else {
    if(computerMove==='rock'){
      result='You lose';
    }
    else if(computerMove==='paper'){
      result='You win';
    }
    else {
      result='tie';
    }
  }

  if(result==='You win') score.win++;
  else if(result==='You lose') score.loss++;
  else score.tie++;

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.result').innerHTML=result;
  document.querySelector('.moves').innerHTML=`You
  <img src="./images/${playerMove}-emoji.png" alt="" class="icon">
  <img src="./images/${computerMove}-emoji.png" alt="" class="icon">
  Computer`;

}

function updateScoreElement(){
document.querySelector('.scores').innerHTML= `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function pickComputerMove(){
const randomNumber=Math.random();
let computerMove='';
if(randomNumber>=0 && randomNumber<1/3){
  computerMove='rock';
}
else if(randomNumber>=1/3 && randomNumber<2/3){
  computerMove='paper';
}
else if(randomNumber>=2/3 && randomNumber<1){
  computerMove='scissors';
}
console.log(computerMove);
return computerMove;
}
