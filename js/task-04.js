let counterValue = 0;
const decrement = document.querySelector(`button[data-action="decrement"]`);
const increment = document.querySelector(`button[data-action="increment"]`);
const counter = document.querySelector("span#value");
counter.textContent = `${counterValue}`;
const handleClickDecrement = () => {
  counter.textContent = `${(counterValue -= 1)}`;
};
const handleClickIncrement = () => {
  counter.textContent = `${(counterValue += 1)}`;
};
decrement.addEventListener("click", handleClickDecrement);
increment.addEventListener("click", handleClickIncrement);
