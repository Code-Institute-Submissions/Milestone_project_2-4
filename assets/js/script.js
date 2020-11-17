let cards = []; // empty array to contain cards
let cardFlipped = false;
let firstPick, secondPick;
let lockBoard = true;
var musicMuted = false;
var soundMuted = false;
var totalTime = 45;
var timeRemaining;
var playMusic, playSound;
var matchedCase = [];

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
    if (playSound===true){
      myMusic.clickSound();
    }
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
};

function timeCountDown() {
  timeRemaining = totalTime;
  setInterval(function () {
    timeRemaining--;
    $('.time-remaining').html(timeRemaining);
    if (timeRemaining === 5) {
      myMusic.timeAboutToEnd();
    }
    if (timeRemaining === 0) {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearInterval(timeCountDown());
  if (playSound===true){
    myMusic.gameOver();
  };
  alert("you lose");
}

function victory(){
  if(matchedCase.length===cards.length){
    if (playSound===true){
      myMusic.victory();
    }
    alert('You Win')
  } else {
    return;
  }
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
    }
    else {
      if (lockBoard === true & gameStart===false) {
        alert('Please click the Start button');
      }
      return;
    }


    //check if this is first click
    if (cardFlipped === false) {
      cardFlipped = true;
      firstPick = this;
      if (playSound===true){
        myMusic.flip();
      };
    } else {
      //if not second click
      cardFlipped = false;
      secondPick = this;
      if (playSound===true){
        myMusic.flip();
      };
      //Check for match
      if (firstPick.dataset.flag_name === secondPick.dataset.flag_name) {
        // for matched case we will disable the click method so the user can not click on the same card
        $(firstPick).off("click");
        $(secondPick).off("click");
        if (playSound===true){
          myMusic.correct();
        };
        matchedCase.push(firstPick,secondPick);
        victory()
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
  game();
  gameStart = false
  /*Button start*/
  $(".btnStart").on("click", function () {
    if (gameStart!=true){
      addCards();
      shuffleCards();
      lockBoard = false;
      if (playSound===true){
        myMusic.startSound();
      }
      timeCountDown();
      gameStart = true
    } else {
      return;
    }
  });
  /*button Instruction*/
  $('#btnInstruction').on('click', function(){
    if (playSound===true){
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
