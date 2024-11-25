let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");

  let operators = document.querySelectorAll(".operator");
  let number = document.querySelectorAll(".number");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  /* number.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  ); */

  [...number].map((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );

  [...operators].map((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousScreen.textContent = `${previousValue}${operator} `.trim();
      currentScreen.textContent = currentValue;
    })
  );

  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    currentScreen.textContent = currentValue;
    previousScreen.textContent = previousValue;
  });
});

let handleNumber = function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
};

let handleOperator = function handleOperator(op) {
  operator = op.trim();
  previousValue = currentValue.trim();
  currentValue = "";
};
