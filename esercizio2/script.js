const button = document.querySelector(".btn");
const body = document.body;

button.addEventListener("click", function () {
  body.classList.toggle("theme");
});