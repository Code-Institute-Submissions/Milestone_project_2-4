let cards = []; // empty array to contain cards
let cardFlipped = false;
let firstPick, secondPick;
let lockBoard = false; //you can only interact when lockBoard is false---fix bug
var muteMusic = true;
var MuteSound = true;
var totalTime = 45;
var timeRemaining

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
    this.gameMusic.volume = 0.5;
    this.wrongSound.volume = 0.2; // this sound is quite loud
    this.gameMusic.loop = true;
  }
  Music() {
    if (muteMusic === false) {
      this.gameMusic.play();
    } else {
      this.gameMusic.pause();
    }
  }
  btnStartSound() {
    this.startGameSound.play();
  }
  stopMusic() {
    this.gameMusic.pause();
    this.gameMusic.currentTime = 0;
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

function muteMusic() {
  $("btnMusic").on("click", function () {
    if (muteMusic === true) {
      muteMusic === false;
    } else {
      muteMusic === true;
    }
  });
}

function MuteSound() {
  myMusic.btnStartSound();
}

function btnStartGame() {
  $("btnStart").on("click", function () {
    let myMusic = new AudioController();
    myMusic.Music();

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
      //myMusic.flip();
    } else {
      //if not second click
      cardFlipped = false;
      secondPick = this;
      //myMusic.flip();
      //Check for match
      if (firstPick.dataset.flag_name === secondPick.dataset.flag_name) {
        // for matched case we will disable the click method so the user can not click on the same card
        $(firstPick).off("click");
        $(secondPick).off("click");
        //myMusic.correct();
      } else {
        // if it's not match
        lockBoard = true;
        setTimeout(function () {
          //setTimeout method allow user to see the second pick by adding more time before calling the function
          //without this method the game flip the second pick card very fast that the user aren't able to see his second pick
          //myMusic.wrong();
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
  addCards();
  shuffleCards();
  game();
});
