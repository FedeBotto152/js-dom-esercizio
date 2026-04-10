const emailInput = document.querySelector(".email");
const firstNameInput = document.querySelector(".firstname");
const lastNameInput = document.querySelector(".lastname");
const button = document.querySelector(".btn");
const titleName = document.querySelector(".title-name");
const printedForm = document.querySelector(".printedform");

const savedData = sessionStorage.getItem("userForm");

if (savedData) {
  const user = JSON.parse(savedData);

  emailInput.value = user.email;
  firstNameInput.value = user.firstName;
  lastNameInput.value = user.lastName;

  titleName.textContent = user.firstName;

  printedForm.textContent =
    "Email: " + user.email +
    " | Nome: " + user.firstName +
    " | Cognome: " + user.lastName;
}

button.addEventListener("click", function () {
  const user = {
    email: emailInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value
  };

  sessionStorage.setItem("userForm", JSON.stringify(user));

  titleName.textContent = user.firstName;

  printedForm.textContent =
    "Email: " + user.email +
    " | Nome: " + user.firstName +
    " | Cognome: " + user.lastName;
});