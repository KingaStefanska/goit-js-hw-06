const list = document.querySelector(".gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const itemImg = images
  .map(
    (image) =>
      `<li class="list-item"><img src="${image.url}" alt="${image.alt}" width="300" height="200"/></li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", itemImg);

const ul = document.querySelector(".gallery");
ul.style.listStyle = "none";
ul.style.display = "grid";
ul.style.alignItems = "center";
