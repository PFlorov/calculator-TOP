let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");

  let operator = document.querySelectorAll(".operator");
  let number = document.querySelectorAll(".number");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  number.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}
