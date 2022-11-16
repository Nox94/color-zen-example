const board = document.querySelector("#board");
const colors = ["#FED6BC", "#FFFADD", "#DEF7FE", "#E7ECFF", "#C3FBD8", "#FDEED9", "#F6FFF8", "#B5F2EA"];
const SQUARES_NUMBER = 210;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const square = event.target;
  const color = getRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const square = event.target;
  square.style.backgroundColor = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

