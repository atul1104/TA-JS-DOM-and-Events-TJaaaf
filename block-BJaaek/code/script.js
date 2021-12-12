
let 









function getRandomColor() {
  let hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexLetters(math.floor(math.random() * 16));
  }
  return color;
};
