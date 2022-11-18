const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

function getColorChanger() {
  const colorName = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName;
  textEl.textContent = colorName;
}

btnEl.addEventListener("click", getColorChanger)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}