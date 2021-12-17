let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.value);
}

form.addEventListener("submit", handleSubmit);
