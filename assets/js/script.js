$(document).ready(function () {
  //Run this script only when the document have finished loading
  $(".card").on("click", function () {
    this.classList.toggle("flip");
  });
});
