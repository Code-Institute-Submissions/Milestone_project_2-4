let cards = []; // empty array to contain cards
let matchedCase = [];
let cardFlipped = false;
let firstPick, secondPick;
let lockBoard = true;
let gameStart = false;
var musicMuted = false;
var soundMuted = false;
var totalTime = 45;
var score = 0;
var timeRemaining;
var playMusic, gameSound;


class AudioController {
  constructor() {
    this.gameMusic = new Audio("assets/audio/gamesound.mp3");
    this.startGameSound = new Audio("assets/audio/gamestart.wav");
    this.flipSound = new Audio("assets/audio/flip.wav");
    this.correctSound = new Audio("assets/audio/correctpick.wav");
    this.wrongSound = new Audio("assets/audio/wrongpick.wav");
    this.victorySound = new Audio("assets/audio/victory.wav");
    this.gameOverSound = new Audio("assets/audio/gameover.wav");
    this.timeSound = new Audio("assets/audio/ticktock.wav");
    this.btnClickSound = new Audio("assets/audio/click.wav")
    this.gameMusic.volume = 0.4;
    this.clickSound.volume = 0.2;
    this.wrongSound.volume = 0.1; // this sound is quite loud
    this.gameMusic.loop = true;
  }
  Music() {
    if (playMusic === true) {
      this.gameMusic.play();
    } else {
      this.stopMusic();
    }
  }
  stopMusic() {
    this.gameMusic.pause();
    this.gameMusic.currentTime = 0;
  }
  startSound() {
    this.startGameSound.play();
  }
  clickSound() {
    this.btnClickSound.play();
  }
  flip() {
    this.flipSound.play();
  }
  correct() {
    this.correctSound.play();
  }
  wrong() {
    this.wrongSound.play();
  }
  victory() {
    this.stopMusic();
    this.victorySound.play();
  }
  timeAboutToEnd() {
    this.timeSound.play();
  }
  gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
  }
}

function addCards() {
  $(".card").each(function () {
    cards.push(this);
  });
}

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * 12);
    cards[randomPosition].style.order = i;
    cards[i].style.order = randomPosition;
  }
}

/*---switch the muted ON/OFF---*/
function muteMusic() {
  if(musicMuted===true){
    $(".music-status").html('OFF')
    musicMuted=false
    playMusic=musicMuted
  } else{
    $(".music-status").html('ON')
    musicMuted=true
    playMusic=musicMuted
    if (gameSound===true){
      myMusic.clickSound();
    }
  }
}

function playSound() {
  myMusic= new AudioController
  $(".btnSound").on('click',function(){
    if(soundMuted===true){
      $(".sound-status").html('OFF')
      soundMuted=false
      gameSound=soundMuted
    } else{
      $(".sound-status").html('ON')
      soundMuted=true
      gameSound=soundMuted
    }
  });
}

/*---Play the background music---*/
function playMusic(){
  myMusic= new AudioController
  $(".btnMusic").on('click',function(){
    muteMusic();
    myMusic.Music();
  });
};

function timeCountDown() {
  timeRemaining = totalTime;
  countDown = setInterval(function () {
    timeRemaining--;
    $('.time-remaining').html(timeRemaining);
    if (timeRemaining === 5 & gameSound===true) {
      myMusic.timeAboutToEnd();
    }
    if (timeRemaining === 0) {
      gameOver();
    }
  }, 1000);
}

function addScore(){
  if (timeRemaining >= 30){
    score +=10;
    $('.score').html(score);
  } else if (timeRemaining < 30 & timeRemaining >= 10) {
    score += 5;
    $('.score').html(score);
  } else if (timeRemaining < 10) {
    score +=2;
    $('.score').html(score);
  }
}

/*---When the player lose---*/
function gameOver() {
  clearInterval(countDown);
  if (gameSound===true){
    myMusic.gameOver();
  };
  setTimeout(function(){
    myMusic.Music()
    resetBoard()
  },1000);
  setTimeout(alert("You Lose \n\n Click Re-Start button to try again"),500);
}

/*---When the player win---*/
function victory(){
  if(matchedCase.length===12){
    clearInterval(countDown);
    if (gameSound===true){
      myMusic.victory();
    }
    myScore = "\tCongratulations you win the game\t"+"\n\n\tYour score: " + score +"\t";
    setTimeout(function(){
      resetBoard();
      alert(myScore)
      myMusic.Music()
    },1200);
  };
};

function resetBoard(){
  matchedCase = [];
  timeRemaining = totalTime;
  score = 0;
  $('.score').html(0);
  $(".flip").removeClass('flip');
  firstPick = null;
  secondPick = null;
  cardFlipped=false;
  lockBoard = true;
  gameStart=false;
}

function disableClick(){
  $(this.firstPick).off("click");
  $(this.secondPick).off("click");
}
/*---Matched Case---*/
function checkMatched() {
  if (firstPick.dataset.flag_name === secondPick.dataset.flag_name) {
    // for matched case we will disable the click method so the user can not click on the same card
    lockBoard=true
    setTimeout(function(){ // add green color when it's matched with a certain delay
      $(firstPick).addClass('matched-cards');
      $(secondPick).addClass('matched-cards');
    },250);
    setTimeout(function(){
      if (gameSound===true){
        myMusic.correct();
      };
      $(firstPick).removeClass('matched-cards')
      $(secondPick).removeClass('matched-cards')
    },650);
    setTimeout(function(){
      lockBoard=false;
    },850);
    disableClick();
    matchedCase.push(firstPick,secondPick);
    addScore();
  } else {
    notMatched();
  }
  victory();//Check if player win the game
}

/*---Not Mathced Case---*/
function notMatched(){
  lockBoard = true;
  setTimeout(function(){ // add red color when it's not matched with a certain delay
    $(firstPick).addClass('unmatched-cards');
    $(secondPick).addClass('unmatched-cards');
  },500);
  setTimeout(function(){
    if (gameSound===true){
      myMusic.wrong();
    }
    //the front card will flip to the back card when we remove the flip class
    $(firstPick).removeClass('unmatched-cards')
    $(secondPick).removeClass('unmatched-cards')
  },1000);
  setTimeout(function () {
    //setTimeout method allow user to see the second pick by adding more time before calling the function
    //without this method the game flip the second pick card very fast that the user aren't able to see his second pick
    $(firstPick).removeClass("flip");
    $(secondPick).removeClass("flip");
    lockBoard = false;
  }, 1200);
};

function game() {
  $(".card").off('click').on("click", function () {
    if (lockBoard === true & gameStart ===false){
      if (gameSound===true){
        myMusic.clickSound();
      }
      alert('Please click Re-Start to play');
      $('.click-here').css('visibility','visible');
      setTimeout(function(){
        $('.click-here').css('visibility','hidden');
      },3000);
    };
    if (lockBoard === false) {
      if (this === firstPick) {  //user can not click the same card again
        return;
      } else {
        $(this).addClass("flip");
      }
    }
    else{
      return;
    };

    //check if this is first click
    if (cardFlipped === false) {
      cardFlipped = true;
      firstPick = this;
      if (gameSound===true){
        myMusic.flip();
      };
    } else {
      //if not second click
      cardFlipped = false;
      secondPick = this;
      if (gameSound===true){
        myMusic.flip();
      };
      checkMatched();
    };
  });
};

function startGame(){
  lockBoard = false;
  if (gameStart===true){
    addCards();
    shuffleCards();
    timeCountDown();
    if (gameSound===true){
      myMusic.startSound();
    };
  } else {
    alert('Please click start');
  };
};

$(document).ready(function () {
  playMusic();
  playSound();
  game();
  alert('Click Re-Start to start the game\n\nClick Music and Sound to turn them on');
  /*---Button start---*/
  $(".btnStart").on("click", function () {
    if (gameStart!=true){
      gameStart = true;
      setTimeout(startGame(),500);
    };
  });
  /*button Instruction*/
  $('#btnInstruction').on('click', function(){
    if (gameSound===true){
      myMusic.clickSound();
    }
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnInstruction");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
