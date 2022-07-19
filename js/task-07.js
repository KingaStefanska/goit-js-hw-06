const inputValue = document.querySelector("input#font-size-control");
const textFontSize = document.querySelector("span#text");

textFontSize.style.fontSize = `${inputValue.value}px`;
inputValue.addEventListener("input", (event) => {
  textFontSize.style.fontSize = `${event.currentTarget.value}px`;
});
