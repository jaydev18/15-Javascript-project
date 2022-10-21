//set intial value to 0
let count = 0;
//get value
let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.target.classList;
    if (styles.contains("decrease")) {
      count--;
      value.textContent = count;
      value.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      value.textContent = count;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
