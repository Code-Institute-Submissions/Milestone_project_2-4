let cardArray = [];
let cardFlipped = false;
let firstPick, secondPick;
let lockBoard = false; //you can only interact when lockBoard is false---fix bug

$(document).ready(function () {
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
let randomPosition = Math.floor(Math.random() * 12);
for (i = 0; i < 12; i++) {
  $(".card").data("position", randomPosition);

  console.log(randomPosition);
}
