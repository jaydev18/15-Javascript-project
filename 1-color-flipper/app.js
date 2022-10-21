const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  //get random number from colors 0 to 3
  const randomNumber = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomNumber;
  color.textContent = "";
  color.textContent += randomNumber;
});
