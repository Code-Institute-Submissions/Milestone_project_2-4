const cards = document.querySelectorAll('.card') /*create a storage "cards" which contains of all our card*/

$(document).ready(function () {
  $(".card").on("click", function () {
    console.log("I was clicked");
    console.log(this);
  });
});

/*The each() method specifies a function to run for each matched element */
$("cards").each(function(){

});
cards.forEach((card) => card.addEventListener("click", flipCard));

/* Ready function
function ready() {
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}
*/

//Run this script only when the html and css are finished loading

/*
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}*/
