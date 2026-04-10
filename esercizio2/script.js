const input = document.querySelector("input");
const ul = document.querySelector("ul");

function addProduct() {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(checkbox);
  li.appendChild(span);
  ul.appendChild(li);

  input.value = "";
}