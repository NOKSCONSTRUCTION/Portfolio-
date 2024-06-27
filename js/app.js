const services = document.querySelector(".services");
const menu = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");
const link = document.querySelectorAll(".nav a");

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
    title: "Ceiling",
    image: "images/ceiling.jpg",
    description: "",
  },
  {
    title: "Plastering",
    image: "images/a5.jpeg",
    description: "",
  },
  {
    title: "Painting",
    image: "images/painting.webp",
    description: "",
  },
  {
    title: "Foundations",
    image: "images/a4.jpg",
    description: "",
  },
  {
    title: "Electric",
    image: "images/electric.jpg",
    description: "",
  },
];

for (let i = 0; i < servicesObject.length; i++) {
  const text = document.createElement("p");
  text.innerHTML = servicesObject[i].title;
  // const img = document.createElement("div");
  // img.classList.add("img");
  const item = document.createElement("div");
  item.style.backgroundImage = `url(${servicesObject[i].image})`;
  item.classList.add("service-item");
  item.append(text);
  services.append(item);
}

// menu

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("show");
  document.body.classList.toggle("remove-scroll");
});

link.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.classList.toggle("fa-times");
    document.body.classList.remove("remove-scroll");
  });
});
