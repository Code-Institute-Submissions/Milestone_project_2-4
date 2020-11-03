let cardFlipped = false;
let firstPick, secondPick;

$(document).ready(function () {
  //Run this script only when the document have finished loading
  $(".card").on("click", function () {
    $(this).addClass("flip");

    if (cardFlipped === false) {
      //user first click
      cardFlipped = true;
      firstPick = this;
    } else {
      //user second click
      cardFlipped = false;
      secondPick = this;
    }

    console.log(cardFlipped, firstPick);
  });
});
