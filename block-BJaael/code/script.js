function getRandomColor() {
  let hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber(16);
    color = color + hexLetters[randomNumber];
  }
  return color;
}

//create 500 boxes

let parentBox = document.querySelector(".boxes");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = "2.5rem";
  div.style.height = "2.5rem";
  div.style.border = "1px solid black";
  div.style.textAlign = "center";
  let h3 = document.createElement("h3");
  h3.style.fontSize = "14px";
  let randomNumber = getRandomNumber(500);
  h3.innerText = randomNumber;

  div.append(h3);
  parentBox.append(div);
}

//addEventListener on mousemove
parentBox.addEventListener("mousemove", handleMouseMove);

let allBoxes = document.querySelectorAll(".box");
function handleMouseMove() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.children[0].innerText = getRandomNumber(500);
  });
}
//change bg color

//change random number
