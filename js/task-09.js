function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const background = document.querySelector("body");
const text = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");

background.style.backgroundColor = "#ffffff";
text.textContent = "#ffffff";
btn.addEventListener("click", (event) => {
  background.style.backgroundColor = `${getRandomHexColor()}`;
  text.textContent = `${getRandomHexColor()}`;
});
