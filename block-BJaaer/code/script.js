let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");

let userInfo = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let elements = event.target.elements;
  userInfo.name = elements.name.value;
  userInfo.email = elements.email.value;
  userInfo.chooseColor = elements.chooseColor.value;
  userInfo.movieChoice = elements.movieChoice.value;
  userInfo.range = elements.range.value;
  userInfo.drone = elements.drone.value;
  userInfo.terms = elements.terms.checked;
  modal.classList.add("open");

  let close = document.querySelector(".modal_close");
  close.addEventListener("click", () => {
    modal.classlist.remove("modalInfo");
  });
  displayInfo(userInfo);
});

function displayInfo(data = {}) {
  modalInfo.innerHtml = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email: ${data.email}`;
  let chooseColor = document.createElement("p");
  chooseColor.innerText = `Color: ${data.chooseColor}`;
  let movieChoice = document.createElement("p");
  movieChoice.innerText = `Movie: ${data.movieChoice}`;
  let range = document.createElement("p");
  range.innerText = `Rating for movie: ${data.range}`;
  let drone = document.createElement("p");
  drone.innerText = `Hello${data.drone}`;
  let terms = document.createElement("p");
  terms.innerText = `${
    data.terms ? "You have accepted the terms" : "You have accepted the terms"
  }`;

  modalInfo.append(h1, email, chooseColor, movieChoice, range, drone, terms);
}
