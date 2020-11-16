let cards = []; // empty array to contain cards
let cardFlipped = false;
let firstPick, secondPick;
let lockBoard = false;
var musicMuted = false;
var soundMuted = false;
var totalTime = 45;
var timeRemaining;
var playMusic, playSound;

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
    this.wrongSound.volume = 0.15; // this sound is quite loud
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
  btnStartSound() {
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
  gameOverSound() {
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

//switch the muted ON/OFF
function muteMusic() {
  if(musicMuted===true){
    $(".music-status").html('OFF')
    musicMuted=false
    playMusic=musicMuted
  } else{
    $(".music-status").html('ON')
    musicMuted=true
    playMusic=musicMuted
  }
}

function muteSound() {
  myMusic= new AudioController
  $(".btnSound").on('click',function(){
    if(soundMuted===true){
      $(".sound-status").html('OFF')
      soundMuted=false
      playSound=soundMuted
    } else{
      $(".sound-status").html('ON')
      soundMuted=true
      playSound=soundMuted
    }
  });
}

//Play the background music
function playMusic(){
  myMusic= new AudioController
  $(".btnMusic").on('click',function(){
    muteMusic();
    myMusic.Music();
  });
}

function btnStartGame() {
  $("btnStart").on("click", function () {
    /*Check the otherSound here */
    /////////////////////////
    timeCountDown();
  });
}

function timeCountDown() {
  timeRemaining = totalTime;
  setInterval(function () {
    timeRemaining--;
    $('.time-remaining').innerHTML('hello')
    if (timeRemaining === 0) {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearInterval(timeCountDown());
  alert("you lose");
}

function game() {
  $(".card").on("click", function () {
    if (lockBoard === false) {
      if (this === firstPick) {
        //user can not click the same card again
        return;
      } else {
        $(this).addClass("flip");
      }
    } else {
      return;
    }

    //check if this is first click
    if (cardFlipped === false) {
      cardFlipped = true;
      firstPick = this;
      if (playSound===true){
        myMusic.flip();
      }
    } else {
      //if not second click
      cardFlipped = false;
      secondPick = this;
      if (playSound===true){
        myMusic.flip();
      }
      //Check for match
      if (firstPick.dataset.flag_name === secondPick.dataset.flag_name) {
        // for matched case we will disable the click method so the user can not click on the same card
        $(firstPick).off("click");
        $(secondPick).off("click");
        if (playSound===true){
          myMusic.correct();
        }
      } else {
        // if it's not match
        lockBoard = true;
        setTimeout(function () {
          //setTimeout method allow user to see the second pick by adding more time before calling the function
          //without this method the game flip the second pick card very fast that the user aren't able to see his second pick
          if (playSound===true){
            myMusic.wrong();
          }
          $(firstPick).removeClass("flip");
          $(secondPick).removeClass("flip");

          //the front card will flip to the back card when we remove the flip class
          lockBoard = false;
        }, 1000);
      };
    };
  });
};

$(document).ready(function () {
  playMusic();
  muteSound();
  addCards();
  shuffleCards();
  game();
});
