let input = document.querySelector(`input[type = "text"]`);
let rootElem = document.querySelector(".movies_list");

let allMovies = [
  {
    name: "Forest Gump",
    watched: true,
  },
  {
    name: "Inception",
    watched: true,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  }
});

function deleteMovie(event) {
  //   event.target.parentElement.remove();
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  console.log(id);
  allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI() {
  rootElem.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("styled_checkbox");
    input.id = i;
    input.type = "checkbox";
    input.checked = movie.watched;
    input.addEventListener("change", handleChange);
    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute(`data-id`, i);
    li.append(input, label, span);
    span.addEventListener("click", deleteMovie);
    rootElem.append(li);
  });
}

createMovieUI();
