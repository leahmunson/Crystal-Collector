//set up game
    var targetScore = Math.floor(Math.random()*120) + 1;
    $('#targetScoreSpot').text(targetScore);
    var crystal1= Math.floor(Math.random()*11)+1;
    var crystal2= Math.floor(Math.random()*11)+1;
    var crystal3= Math.floor(Math.random()*11)+1;
    var crystal4= Math.floor(Math.random()*11)+1;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    $('#userWins').text(wins);
    $('#userLosses').text(losses);

//reset game
function reset (){
    targetScore = Math.floor(Math.random()*120) + 1;
    console.log(targetScore);
    $('#targetScoreSpot').text(targetScore);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
    
}

//add wins to userTotal
function addWin(){
    alert("Yay, you won!");
        wins++;
        $('#userWins').text(wins);
        reset();
}

//add losses to userTotal
function addLoss() {
    alert("You Lose!");
        losses++;
        $('#userLosses').text(losses);
        reset();
}

//set up jewel scores
$('#one').on ('click', function(){
    userTotal = userTotal + crystal1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == targetScore){
          addWin();
        }
        else if (userTotal > targetScore){
          addLoss();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + crystal2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === targetScore){
          addWin();
        }
        else if (userTotal > targetScore){
          addLoss();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + crystal3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal === targetScore){
          addWin();
        }
        else if (userTotal > targetScore){
          addLoss();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + crystal4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          if (userTotal === targetScore){
          addWin();
        }
        else if (userTotal > targetScore){
          addLoss();
        }
  }
  );   