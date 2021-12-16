let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");

let dataSet = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "paper",
    beats: "rock",
  },
];

let userSelected = {},
  computerSelected = {};

function getWinner(user, computer) {
  if (user.name === computer.name) {
    result.innerText = "It's a tie";
  } else if (user.beats === computer.name) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "Computer won!";
  }
}

function getRandomNumber(max = 3) {
  return Math.floor(Math.random() * max);
}

function createUserLayout() {
  userRoot.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    if (userSelected.name === icon.name) {
      li.classList.add("selected");
    }
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i);
    userRoot.append(li);
    li.addEventListener("click", () => {
      userSelected = icon;
      computerSelected = dataSet[getRandomNumber()];
      console.log(userSelected, computerSelected);
      getWinner(userSelected, computerSelected);
      createUserLayout();
      createComputerLayout();
    });
  });
}
createUserLayout();

function createComputerLayout() {
  computerRoot.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    if (computerSelected.name === icon.name) {
      li.classList.add("selected");
    }
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i);
    computerRoot.append(li);
    li.addEventListener("click", () => {
      computerSelected = icon;
    });
  });
}
createComputerLayout();
