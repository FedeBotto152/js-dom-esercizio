 const ul = document.querySelector("ul");

    console.log(ul.parentElement);

    const secondoLi = ul.children[1];
    console.log(secondoLi);

    console.log(secondoLi.nextElementSibling);
    console.log(secondoLi.previousElementSibling);

    console.log(secondoLi.innerText);
    console.log(secondoLi.nextElementSibling.innerText);
    console.log(secondoLi.previousElementSibling.innerText);