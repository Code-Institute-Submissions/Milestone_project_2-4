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
      if (firstPick.dataset.flag_name === secondPick.dataset.flag_name) {
        // for matched case we will disable the click method so the user can not click on the same card
        $(firstPick).off("click");
        $(secondPick).off("click");
        //we need this condition to prevent bug
      } else {
        // if it's not match
        setTimeout(function () {
          //setTimeout method allow user to see the second pick
          //without this method the game flip the second pick card very fast that the user aren't able to see his second pick
          $(firstPick).removeClass("flip");
          $(secondPick).removeClass("flip");
          //the front card will flip to the back card when we remove the flip class
        }, 1000);
      }
    }

    console.log(cardFlipped, firstPick);
  });
});
