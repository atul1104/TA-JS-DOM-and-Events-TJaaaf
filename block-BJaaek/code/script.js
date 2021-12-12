let first = document.querySelector(".first");
let second = document.querySelector(".second");

first.addEventListener("click", handleClick);

function handleClick() {
  let randomColor = getRandomColor();
  first.style.backgroundColor = randomColor;
}

function getRandomColor() {
  let hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

second.addEventListener("mousemove", handleMouseMove);
function handleMouseMove() {
  let randomColor = getRandomColor();
  second.style.backgroundColor = randomColor;
}
