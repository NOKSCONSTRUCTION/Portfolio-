const services = document.querySelector(".services");
const menu = document.querySelector(".fa-bars");
const nav = document.querySelector("header .nav");
const link = document.querySelectorAll("header .nav a");

const servicesObject = [
  {
    title: "Tiling",
    image: "images/a5.jpg",
    description: "",
  },
  {
    title: "Roofing",
    image: "images/a3.jpg",
    description: "",
  },
  {
    title: "Plastering",
    image: "images/a5.jpeg",
    description: "",
  },
  {
    title: "tiling",
    image: "images/a5.jpg",
    description: "",
  },
];

for (let i = 0; i < servicesObject.length; i++) {
  const text = document.createElement("p");
  text.innerHTML = servicesObject[i].title;
  const img = document.createElement("div");
  img.classList.add("img");
  img.style.backgroundImage = `url(${servicesObject[i].image})`;
  const item = document.createElement("div");
  item.classList.add("service-item");
  item.append(img, text);
  services.append(item);
}

// menu

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("show");
});

link.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.classList.toggle("fa-times");
  });
});
