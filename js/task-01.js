const categories = document.querySelector("ul#categories");
console.log(`Number of categories: ${categories.children.length}`);

const items = document.querySelectorAll("li.item");
const a = Array.from(items);
const a2 = a.map((element) => {
  return console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`);
});
