const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");
const item = () => {
  for (const ingredient of ingredients) {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    list.append(li);
  }
};

console.log(item());
