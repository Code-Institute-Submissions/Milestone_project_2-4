class AudioController {
  constructor() {
    this.gameMusic = new Audio("assets/audio/gamesound.mp3");
    this.startGameSound = new Audio("assets/audio/gamestart.wav");
    this.flipSound = new Audio("assets/audio/flip.wav");
    this.matchSound = new Audio("assets/audio/correctpick.wav");
    this.victorySound = new Audio("assets/audio/victory.wav");
    this.gameOverSound = new Audio("assets/audio/gameover.wav");
    this.timeSound = new Audio("assets/audio/ticktock.wav");
    this.gameMusic.volume = 0.5;
    this.gameMusic.loop = true;
  }
  startMusic() {
    this.gameMusic.play();
  }
  startSound() {
    this.startGameSound.play();
  }
  stopMusic() {
    this.gameMusic.pause();
    this.gameMusic.currentTime = 0;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
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

let cardArray = []; // empty array to contain cards
let cardFlipped = false;
let firstPick, secondPick;
let lockBoard = false; //you can only interact when lockBoard is false---fix bug

// Add cards to our array
$(".card").each(function () {
  cardArray.push(this);
});

//Shuffle cards
for (let i = cardArray.length - 1; i > 0; i--) {
  let randomPosition = Math.floor(Math.random() * 12);
  cardArray[randomPosition].style.order = i;
  cardArray[i].style.order = randomPosition;
}

console.log(cardArray);

$(document).ready(function () {
  let myMusic = new AudioController();
  myMusic.startMusic();
  //Run this script only when the document have finished loading
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
    } else {
      //if not second click
      cardFlipped = false;
      secondPick = this;
      //Check for match
      if (firstPick.dataset.flag_name === secondPick.dataset.flag_name) {
        // for matched case we will disable the click method so the user can not click on the same card
        $(firstPick).off("click");
        $(secondPick).off("click");
      } else {
        // if it's not match
        lockBoard = true;
        setTimeout(function () {
          //setTimeout method allow user to see the second pick by adding more time before calling the function
          //without this method the game flip the second pick card very fast that the user aren't able to see his second pick
          $(firstPick).removeClass("flip");
          $(secondPick).removeClass("flip");
          //the front card will flip to the back card when we remove the flip class
          lockBoard = false;
        }, 1000);
      }
    }
    console.log(cardFlipped, firstPick);
  });
});
