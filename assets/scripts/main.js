var cards = document.querySelectorAll(".card");
let menu = document.querySelector(".container");
for (let card of cards) {
  card.addEventListener("click", function () {
    var title = card.querySelector(".card-title").textContent;

    // create Iframe
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("ar-frame");
    iframe.src = "assets/tabs/" + title + ".html"; // Path to the AR app
    iframeContainer.style.display = "block";
    menu.style.display = "none";
    console.log("Clicked Burger:", title);
  });
}

function closeSelf() {
  const iframeContainer = document.getElementById("iframe-container");
  const iframe = document.getElementById("ar-frame");
  iframeContainer.style.display = "none";
  menu.style.display = "block";
}
