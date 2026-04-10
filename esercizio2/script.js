const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const form = document.getElementById("form");

const person = {
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  age: ageInput.value
};

form.setAttribute("data-person", JSON.stringify(person));

console.log(person);