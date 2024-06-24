var cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    var title = card.querySelector(".card-title").textContent;

    console.log("Clicked Burger:", title);
  });
}
