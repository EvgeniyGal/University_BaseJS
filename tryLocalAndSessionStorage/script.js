const form = document.querySelector(".user-form");

Object.keys(localStorage).forEach((el) => {
  [...form.elements].forEach((elIn) => {
    if (elIn.name === el) {
      elIn.value = localStorage.getItem(el);
    }
  });
});

form.elements.name.addEventListener("input", handlerInputValue);
form.elements.birthday.addEventListener("input", handlerInputValue);
form.elements.description.addEventListener("input", handlerInputValue);

function handlerInputValue(ev) {
  const currElement = ev.target;
  localStorage.setItem(currElement.name, currElement.value);
}

form.addEventListener("submit", handlerFormSubmit);

function handlerFormSubmit(ev) {
  ev.preventDefault();
  console.log(
    [...ev.target.elements]
      .filter((el) => el.nodeName === "INPUT" || el.nodeName === "TEXTAREA")
      .map((el) => {
        return el.name + " - " + el.value;
      })
      .join(", ")
  );
  localStorage.clear();
  ev.target.reset();
}
