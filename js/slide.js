const title = document.querySelector("#slider .text");
const slide = document.querySelector("#slide");

let imgCount = 5;

for (let i = 0; i < 15; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.backgroundImage = `url(${servicesObject[imgCount].image})`;
  slide.append(tile);
}

let counter = -5;
let countImg = 0;

const tiles = document.querySelectorAll(".tile");

const flip = (count, cnt) => {
  tiles[count - 3].style.backgroundImage = `url(${servicesObject[cnt].image})`;
  tiles[count - 4].style.backgroundImage = `url(${servicesObject[cnt].image})`;
  tiles[count - 3].classList.add("flip");
  tiles[count - 4].classList.remove("flip");
  setTimeout(() => {
    title.innerHTML = `<h1>${servicesObject[cnt].title}</h1><p>${servicesObject[cnt].description}</p>`;
  }, 2000);
};

setInterval(() => {
  counter++;
  if (counter > 1) flip(counter, countImg);
  if (counter === 17) {
    counter = -5;
    countImg++;
    if (countImg > servicesObject.length - 1) countImg = 0;
    flip(counter, countImg);
  }
}, 300);
