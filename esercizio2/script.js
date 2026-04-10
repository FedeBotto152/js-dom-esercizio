const cardName = document.querySelector(".card-name");
const cardImage = document.querySelector(".card-image");

fetch("https://ringsdb.com/api/public/card/01001.json")
  .then((response) => response.json())
  .then((card) => {
    cardName.textContent = card.name;
    cardImage.src = "https://ringsdb.com/" + card.imagesrc;
    cardImage.alt = card.name;
  })
  .catch((error) => {
    cardName.textContent = "Errore nel caricamento della carta";
    console.log(error);
  });