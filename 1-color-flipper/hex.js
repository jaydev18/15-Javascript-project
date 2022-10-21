const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", hexColor);

function hexColor() {
  let hexNumber = "#";
  for (let i = 1; i <= 6; i++) {
    hexNumber += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.background = hexNumber;
  color.textContent = "";
  color.textContent = hexNumber;
}
