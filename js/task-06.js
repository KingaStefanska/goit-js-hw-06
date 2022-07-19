const textInput = document.querySelector("input#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.setAttribute("class", "valid");
  }
  if (event.currentTarget.value.length !== 6) {
    event.currentTarget.setAttribute("class", "invalid");
  }
  if (!event.currentTarget.value)
    event.currentTarget.setAttribute("class", "neutral");
});
